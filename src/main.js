import { nowInSec, SkyWayAuthToken, SkyWayContext, SkyWayRoom, SkyWayStreamFactory, uuidV4 } from '@skyway-sdk/room';
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

    const { audio, video } = await SkyWayStreamFactory.createMicrophoneAudioAndCameraStream(); // 2

    video.attach(localVideo); // 3
    await localVideo.play(); // 4

    // ラジオボタン要素を取得
    const radioButtons = document.querySelectorAll('input[name="room-type"]');
    let roomType = document.getElementById('p2p').id;
    console.log(`default is ${typeof(roomType)}`);

    // 各ラジオボタンにイベントリスナーを追加
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            // 選択されたラジオボタンの値を取得
            roomType = document.querySelector('input[name="room-type"]:checked').id;
            console.log(`Now is ${roomType}`);
        });
    });
    
    // Create the room
    joinButton.onclick = async () => {
        if (roomNameInput.value === '') return;

        const context = await SkyWayContext.Create(token);

        // Search room or create
        const room = await SkyWayRoom.FindOrCreate(context, {
            type: roomType,
            name: roomNameInput.value,
        });

        // Save the member
        const me = await room.join();
        myId.textContent = me.id;

        // Publis audio and video
        await me.publish(audio);
        await me.publish(video);

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
    };
})(); // 1

