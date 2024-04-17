import { LocalVideoStream, nowInSec, SkyWayAuthToken, SkyWayContext, SkyWayRoom, SkyWayStreamFactory, uuidV4 } from '@skyway-sdk/room';
const token = new SkyWayAuthToken({
    jti: uuidV4(),
    iat: nowInSec(),
    exp: nowInSec() + 60 * 60 * 24,
    scope: {
        app: {
            id: '244804f8-cdc4-484e-a8f9-6fbf99227b01',
            turn: true,
            actions: ['read'],
            channels: [
                {
                    id: '*',
                    name: '*',
                    actions: ['write'],
                    members: [
                        {
                            id: '*',
                            name: '*',
                            actions: ['write'],
                            publication: {
                                actions: ['write'],
                            },
                            subscription: {
                                actions: ['write'],
                            },
                        },
                    ],
                    sfuBots: [
                        {
                            actions: ['write'],
                            forwardings: [
                                {
                                    actions: ['write'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
}).encode('joicwMieFh0hxq+8EoNZCNoH5x4qIXS3zYm9lG2zDcA=');


// Video and audio
(async () => {
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

    const inputAudioDevices = await SkyWayStreamFactory.enumerateInputAudioDevices();
    let audio = await SkyWayStreamFactory.createMicrophoneAudioStream({ deviceId: inputAudioDevices[0].id });

    const inputVideoDevices = await SkyWayStreamFactory.enumerateInputVideoDevices();
    let video = await SkyWayStreamFactory.createCameraVideoStream({ deviceId: inputVideoDevices[0].id });

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
            video = await SkyWayStreamFactory.createCameraVideoStream({ deviceId: selectedValue });
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

            const captureStream =
                await navigator.mediaDevices.getDisplayMedia({ video: true });
            const displayVideoTrack = captureStream.getVideoTracks();
            const newStream = new LocalVideoStream(displayVideoTrack[0]);

            await videoPublication.replaceStream(newStream);
        } catch (err) {
            console.error(`Error: ${err}`);
        };
    };


    // Mute/Unmute audio device
    muteButton.onclick = async () => {
        // Do nothing before publishing
        if (typeof audioPublication === "undefined") return;

        try {
            // Mute state
            let state = audioPublication.state;

            console.log(`first: ${muteButton.innerText}`)

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
            console.error(`Error: ${err}`);
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
            audioPublication = await me.publish(audio);
            // Mute for default
            await audioPublication.disable();

            // Publish video
            videoPublication = await me.publish(video);

            const subscribeAndAttach = (publication) => {
                // 3
                if (publication.publisher.id === me.id) return;

                const subscribeButton = document.createElement('button'); // 3-1
                subscribeButton.textContent = `${publication.publisher.id}: ${publication.contentType}`;

                buttonArea.appendChild(subscribeButton);

                subscribeButton.onclick = async () => {
                    // 3-2
                    const { stream } = await me.subscribe(publication.id); // 3-2-1

                    let newMedia; // 3-2-2
                    switch (stream.track.kind) {
                        case 'video':
                            newMedia = document.createElement('video');
                            newMedia.playsInline = true;
                            newMedia.autoplay = true;
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

            room.publications.forEach(subscribeAndAttach); // 1
            room.onStreamPublished.add((e) => subscribeAndAttach(e.publication));
        } catch (error) {
            console.error(`Error: ${err}`);
        }
    };
})(); // 1

