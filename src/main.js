import { LocalVideoStream, nowInSec, SkyWayAuthToken, SkyWayContext, SkyWayRoom, SkyWayStreamFactory, uuidV4 } from '@skyway-sdk/room';
import { BlurBackground, VirtualBackground } from 'skyway-video-processors';
import imageURL from './img/green.png';
import 'dotenv/config'

// Video and audio
(async () => {
    let token;
    const channelName = document.getElementById('channel-name-text').value;
    const memberName = document.getElementById('member-name-text').value;
    
    // POST request to auth server.
    const response = await fetch(`${process.env.API_TOKEN_AUTHENTICATION_DOMAIN}/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionToken: '4CXS0f19nvMJBYK05o3toTWtZF5Lfd2t6Ikr2lID',
            channelName: channelName,
            memberName: memberName
        })
    });

    if (response.ok) {
        const credential = await response.json();
        token = credential.authToken;
    } else {
        alert("Request failed: " + response.statusText);
    }


    // 1
    const localVideo = document.getElementById('local-video');
    const buttonArea = document.getElementById('button-area');
    const remoteMediaArea = document.getElementById('remote-media-area');
    const roomNameInput = document.getElementById('room-name');

    const myId = document.getElementById('my-id');
    const joinButton = document.getElementById('join');
    const muteButton = document.getElementById('mute');
    const shareScreenButton = document.getElementById('shareScreen')

    const audioSelect = document.getElementById('audioSource');
    const videoSelect = document.getElementById('videoSource');
    const backgroundSelect = document.getElementById("backgroundSelect");;

    const virtualBackgroundProcessor = new VirtualBackground({ image: imageURL });
    const blurBackgroundProcessor = new BlurBackground();
    await virtualBackgroundProcessor.initialize();
    await blurBackgroundProcessor.initialize();

    const inputAudioDevices = await SkyWayStreamFactory.enumerateInputAudioDevices();
    let audio = await SkyWayStreamFactory.createMicrophoneAudioStream({ deviceId: inputAudioDevices[0].id });

    const cameraVideoStreamDefaultHeight = 640;
    const cameraVideoStreamDefaultWidth = 360;
    const cameraVideoStreamDefaultFrameRate = 15;

    const inputVideoDevices = await SkyWayStreamFactory.enumerateInputVideoDevices();
    let video = await SkyWayStreamFactory.createCustomVideoStream(virtualBackgroundProcessor,
        {
            constraints: {
                deviceId: inputVideoDevices[0].id,
                height: cameraVideoStreamDefaultHeight,
                width: cameraVideoStreamDefaultWidth,
                frameRate: cameraVideoStreamDefaultFrameRate,
            },
            stopTrackWhenDisabled: true,
        });

    let audioPublication;
    let videoPublication;

    // Change audio input source
    audioSelect.addEventListener("change", async function () {
        let selectedValue = this.value;

        try {
            audio = await SkyWayStreamFactory.createMicrophoneAudioStream({ deviceId: selectedValue });
        } catch (error) {
            console.error("Error occurred while creating microphone audio stream:", error);
        }
    });

    // Change video input source
    videoSelect.addEventListener("change", async function () {
        let selectedValue = this.value;

        try {
            video = await SkyWayStreamFactory.createCustomVideoStream(virtualBackgroundProcessor, {
                constraints: {
                    deviceId: selectedValue,
                    height: cameraVideoStreamDefaultHeight,
                    width: cameraVideoStreamDefaultWidth,
                    frameRate: cameraVideoStreamDefaultFrameRate,
                },
                stopTrackWhenDisabled: true
            });
        } catch (error) {
            console.error("Error occurred while creating video stream:", error);
        }
    });

    await SkyWayStreamFactory.enumerateDevices()
        .then(function (deviceInfos) {
            for (var i = 0; i !== deviceInfos.length; ++i) {
                let deviceInfo = deviceInfos[i];
                let option = document.createElement('option');
                option.value = deviceInfo.id;
                option.text = deviceInfo.label;
                if (deviceInfo.kind === 'audioinput') {
                    audioSelect.appendChild(option);
                } else if (deviceInfo.kind === 'videoinput') {
                    videoSelect.appendChild(option);
                }
            }
        }).catch(function (error) {
            console.error('mediaDevices.enumerateDevices() error:', error);

            return;
        });

    video.attach(localVideo); // 3
    await localVideo.play(); // 4

    // ラジオボタン要素を取得
    const radioButtons = document.querySelectorAll('input[name="room-type"]');
    let roomType = document.getElementById('p2p').id;

    // 各ラジオボタンにイベントリスナーを追加
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            // 選択されたラジオボタンの値を取得
            roomType = document.querySelector('input[name="room-type"]:checked').id;
        });
    });

    // screen sharing
    shareScreenButton.onclick = async () => {
        try {
            // Do nothing before publishing
            if (typeof audioPublication === "undefined") return;

            // ①生のWeb-RTCで実装している(v2?)
            // const captureStream =
            //     await navigator.mediaDevices.getDisplayMedia({ video: true });
            // const displayVideoTrack = captureStream.getVideoTracks();
            // const newStream = new LocalVideoStream(displayVideoTrack[0]);

            // await videoPublication.replaceStream(newStream, { releaseOldStream: false });

            // ②v3
            const newStream = await SkyWayStreamFactory.createDisplayStreams();

            await videoPublication.replaceStream(newStream.video, { releaseOldStream: false });

            // TODO: 自分のカメラを映したまま画面共有を行う

        } catch (error) {
            console.error(`Error: ${error}`);
        };
    };


    // Mute/Unmute audio device
    muteButton.onclick = async () => {
        // Do nothing before publishing
        if (typeof audioPublication === "undefined") return;

        try {
            // Mute state
            let state = audioPublication.state;

            if (state === "enabled") {
                // Mute
                await audioPublication.disable();
                muteButton.innerText = "unmute"
            }
            else if (state === "disabled") {
                // Unmute
                await audioPublication.enable();
                muteButton.innerText = "mute"
            }
            else {
                return;
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    // Create the room
    joinButton.onclick = async () => {
        if (roomNameInput.value === '') return;

        try {
            const context = await SkyWayContext.Create(token);

            // Search room or create
            const room = await SkyWayRoom.FindOrCreate(context, {
                type: roomType,
                name: roomNameInput.value,
            });

            // Save the member
            const me = await room.join();
            myId.textContent = me.id;

            // Publish audio
            audioPublication = await me.publish(
                audio,
                {
                    maxSubscribers: 50
                }
            );
            // Mute for default
            await audioPublication.disable();

            // Publish video
            videoPublication = await me.publish(
                video,
                {
                    maxSubscribers: 50,
                    encodings: [
                        {
                            scaleResolutionDownBy: 4,
                            id: 'low',
                            maxBitrate: 80_000,
                            maxFramerate: 5
                        },
                        {
                            scaleResolutionDownBy: 1,
                            id: 'high',
                            maxBitrate: 400_000,
                            maxFramerate: 30
                        }
                    ],
                });

            const subscribeAndAttach = (publication) => {
                // 3
                if (publication.publisher.id === me.id) return;

                const subscribeButton = document.createElement('button'); // 3-1
                subscribeButton.textContent = `${publication.publisher.id}: ${publication.contentType}`;

                buttonArea.appendChild(subscribeButton);

                subscribeButton.onclick = async () => {
                    // 3-2
                    const { stream } = await me.subscribe(publication, { preferredEncodingId: 'low' }); // 3-2-1

                    let newMedia; // 3-2-2
                    switch (stream.track.kind) {
                        case 'video':
                            newMedia = document.createElement('video');
                            newMedia.playsInline = true;
                            newMedia.autoplay = true;
                            newMedia.id = stream.id;
                            newMedia.onclick = switchEncodingSetting;
                            break;
                        case 'audio':
                            newMedia = document.createElement('audio');
                            newMedia.controls = true;
                            newMedia.autoplay = true;
                            break;
                        default:
                            return;
                    }
                    stream.attach(newMedia); // 3-2-3
                    remoteMediaArea.appendChild(newMedia);
                };
            };

            // Switch the encoding setting if you click the video
            const switchEncodingSetting = async (e) => {
                const videoId = e.srcElement.id;
                const subscription = me.subscriptions.find((subscription) => subscription.stream.id == videoId);

                if (subscription.preferredEncoding === 'high') {
                    subscription.changePreferredEncoding('low');
                } else if (subscription.preferredEncoding === 'low') {
                    subscription.changePreferredEncoding('high');
                }
            };

            room.publications.forEach(subscribeAndAttach); // 1
            room.onStreamPublished.add((e) => subscribeAndAttach(e.publication));
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };
})(); // 1

