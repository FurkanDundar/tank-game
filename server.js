
let wall = new Float32Array(
    [
        1.0, -0.3, 0.4, -0.28, 0.4, -0.3, 1.0, -0.3, 0.4, -0.28, 1.0, -0.28,
        -0.4, 0.28, -1, 0.3, -1, 0.28, -0.4, 0.28, -1, 0.3, -0.4, 0.3,
        -0.7, -0.5, -1, -0.48, -1, -0.50, -0.7, -0.5, -1, -0.48, -0.7, -0.48,
        1, 0.48, 0.7, 0.5, 0.7, 0.48, 1, 0.48, 0.7, 0.50, 1, 0.50
    ]);

let tank1UpperBody = new Float32Array([
    0.05,
    -0.7,
    0.05,
    -0.8,
    -0.05,
    -0.8,
    0.05,
    -0.7,
    -0.05,
    -0.8,
    -0.05,
    -0.7, // üst gövde
    0.01,
    -0.55,
    0.01,
    -0.8,
    -0.01,
    -0.8,
    0.01,
    -0.55,
    -0.01,
    -0.8,
    -0.01,
    -0.55, // namlu
]);

let tank1LowerBody = new Float32Array([
    0.1, -0.6, 0.1, -0.9, -0.1, -0.9, 0.1, -0.6, -0.1, -0.9, -0.1, -0.6,
]);

let tank1Missile = new Float32Array([
    -0.01, -0.54, 0.01, -0.54, 0.0, -0.5,
]);

let tank1Box = [
    { x: -0.10, y: -0.6 }, // TOP-LEFT
    { x: 0.10, y: -0.6 },  // TOP RIGHT
    { x: -0.10, y: -0.9 }, // BOTTOM LEFT
    { x: 0.10, y: -0.9 }   // BOTTOM RIGHT
];

let tank1MissileBox = [
    { x: -0.01, y: -0.54 },
    { x: 0.01, y: -0.54 },
    { x: 0.0, y: -0.5 }
];

let tank1Segments = [
    [{ x: -0.10, y: -0.6 }, { x: 0.10, y: -0.6 }],
    [{ x: 0.10, y: -0.6 }, { x: 0.10, y: -0.9 }],
    [{ x: 0.10, y: -0.9 }, { x: -0.10, y: -0.9 }],
    [{ x: -0.10, y: -0.9 }, { x: -0.10, y: -0.6 }]
]

let tank1MissileSegments = [
    [{ x: -0.01, y: -0.54 }, { x: 0.01, y: -0.54 }],
    [{ x: 0.01, y: -0.54 }, { x: 0.0, y: -0.5 }],
    [{ x: 0.0, y: -0.5 }, { x: -0.01, y: -0.54 }]
];

let tank1StartingCoordinates = [
    { x: -0.10, y: -0.6 },
    { x: 0.10, y: -0.6 },
    { x: -0.10, y: -0.9 },
    { x: 0.10, y: -0.9 }
];

let tank1MissileStartingCoordinates = [
    { x: -0.01, y: -0.54 },
    { x: 0.01, y: -0.54 },
    { x: 0.0, y: -0.5 }
]

let tank2Missile = new Float32Array(
    [
        0.01, 0.54, 0.00, 0.50, -0.01, 0.54
    ]);

let tank2LowerBody = new Float32Array([
    0.1, 0.9, -0.1, 0.6, 0.1, 0.6, 0.1, 0.9, -0.1, 0.6, -0.1, 0.9,
]);

let tank2UpperBody = new Float32Array([
    0.05,
    0.8,
    -0.05,
    0.7,
    0.05,
    0.7,
    0.05,
    0.8,
    -0.05,
    0.7,
    -0.05,
    0.8, // üst gövde
    0.01,
    0.75,
    -0.01,
    0.55,
    0.01,
    0.55,
    0.01,
    0.75,
    -0.01,
    0.55,
    -0.01,
    0.75, // namlu
]);

let tank2Box = [
    { x: -0.10, y: 0.9 }, // TOP-LEFT
    { x: 0.10, y: 0.9 },  // TOP RIGHT
    { x: -0.10, y: 0.6 }, // BOTTOM LEFT
    { x: 0.10, y: 0.6 }   // BOTTOM RIGHT
]

let tank2MissileBox = [
    { x: 0.01, y: 0.54 },
    { x: 0.00, y: 0.50 },
    { x: -0.01, y: 0.54 }
]

let tank2MissileStartingCoordinates = [
    { x: 0.01, y: 0.54 },
    { x: 0.00, y: 0.50 },
    { x: -0.01, y: 0.54 }
]

let tank2Segments = [
    [{ x: -0.10, y: 0.9 }, { x: 0.10, y: 0.9 }],
    [{ x: 0.10, y: 0.9 }, { x: 0.10, y: 0.6 }],
    [{ x: 0.10, y: 0.6 }, { x: -0.10, y: 0.6 }],
    [{ x: -0.10, y: 0.6 }, { x: -0.10, y: 0.9 }]
]

let tank2MissileSegments = [
    [{ x: 0.01, y: 0.54 }, { x: 0.00, y: 0.50 }],
    [{ x: 0.00, y: 0.50 }, { x: -0.01, y: 0.54 }],
    [{ x: -0.01, y: 0.54 }, { x: 0.01, y: 0.54 }]
];

let tank2StartingCoordinates = [
    { x: -0.10, y: 0.9 }, // TOP-LEFT
    { x: 0.10, y: 0.9 },  // TOP RIGHT
    { x: -0.10, y: 0.6 }, // BOTTOM LEFT
    { x: 0.10, y: 0.6 }   // BOTTOM RIGHT
]


let borders = [[{ x: -1, y: 1 }, { x: 1, y: 1 }],
[{ x: 1, y: 1 }, { x: 1, y: -1 }],
[{ x: 1, y: -1 }, { x: -1, y: -1 }],
[{ x: -1, y: -1 }, { x: -1, y: 1 }],
[{ x: 0.4, y: -0.28 }, { x: 0.4, y: -0.3 }],
[{ x: 0.4, y: -0.28 }, { x: 1, y: -0.28 }],
[{ x: 0.4, y: -0.3 }, { x: 1, y: -0.3 }],
[{ x: -1, y: 0.28 }, { x: -0.4, y: 0.28 }],
[{ x: -0.4, y: 0.28 }, { x: -0.4, y: 0.3 }],
[{ x: -0.4, y: 0.3 }, { x: -1, y: 0.3 }],
[{ x: -1, y: -0.48 }, { x: -0.7, y: -0.48 }],
[{ x: -0.7, y: -0.48 }, { x: -0.7, y: -0.5 }],
[{ x: -0.7, y: -0.5 }, { x: -1, y: -0.5 }],
[{ x: 1, y: 0.48 }, { x: 0.7, y: 0.48 }],
[{ x: 0.7, y: 0.48 }, { x: 0.7, y: 0.5 }],
[{ x: 0.7, y: 0.5 }, { x: 1, y: 0.5 }]
];


let wallSegments = [
    [{ x: -1, y: 0.3 }, { x: -0.4, y: 0.3 }],
    [{ x: -0.4, y: 0.3 }, { x: -0.4, y: 0.28 }],
    [{ x: -0.4, y: 0.28 }, { x: -1, y: 0.28 }],
    [{ x: -1, y: 0.28 }, { x: -1, y: 0.3 }],
    [{ x: -1, y: -0.48 }, { x: -0.7, y: -0.48 }],
    [{ x: -0.7, y: -0.48 }, { x: -0.7, y: -0.5 }],
    [{ x: -0.7, y: -0.5 }, { x: -1, y: -0.50 }],
    [{ x: -1, y: -0.50 }, { x: -1, y: -0.48 }],
    [{ x: 0.7, y: 0.50 }, { x: 1, y: 0.50 }],
    [{ x: 1, y: 0.50 }, { x: 1, y: 0.48 }],
    [{ x: 1, y: 0.48 }, { x: 0.7, y: 0.48 }],
    [{ x: 0.7, y: 0.48 }, { x: 0.7, y: 0.50 }],
    [{ x: 0.40, y: -0.3 }, { x: 1.0, y: -0.3 }],
    [{ x: 1, y: -0.3 }, { x: 1.0, y: -0.28 }],
    [{ x: 1.0, y: -0.28 }, { x: 0.4, y: -0.28 }],
    [{ x: 0.4, y: -0.28 }, { x: 0.4, y: -0.3 }]
];

const gameState = {
    tank1: {
        theta: 0.0,
        centerX: 0.0,
        centerY: -0.75,
        distanceX: 0.0,
        distanceY: 0.0,
        distanceMissileX: 0.0,
        distanceMissileY: 0.0,
        defaultDirectionX: 0.0,
        defaultDirectionY: 0.02,
        directionX: 0.00,
        directionY: 0.02,
        lowerBody: tank1LowerBody,
        upperBody: tank1UpperBody,
        missile: tank1Missile,
        fireReady: true,
        missileDisappear: false,
        destroyed: false
    },
    walls: {
        wall: wall,
    },
    tank2: {
        theta: 0.0,
        centerX: 0.0,
        centerY: 0.75,
        distanceX: 0.0,
        distanceY: 0.0,
        distanceMissileX: 0.0,
        distanceMissileY: 0.0,
        defaultDirectionX: 0.0,
        defaultDirectionY: -0.02,
        directionX: 0.00,
        directionY: -0.02,
        lowerBody: tank2LowerBody,
        upperBody: tank2UpperBody,
        missile: tank2Missile,
        fireReady: true,
        missileDisappear: false,
        destroyed: false
    }
}
let currentMissile1State;
let currentMissile2State;

const express = require("express");
let app = express();
let server = app.listen(process.env.PORT || 4000);
let io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

const players = [];

app.get('/', (request, response) => {
    if (players.length < 2) {
        response.sendFile(__dirname + '/public/index.html');
    }
})

io.on("connection", (client) => {
    console.log("client is connected.");
    if (players.length < 2) {
        players.push(client.id);
        console.log(players);
    }
    io.emit('initializeGame', gameState);

    client.on("rotateLeft", () => {
        if (client.id === players[0]) {
            gameState.tank1.theta += 0.06;
            const newDirections = calculateNewDirection(gameState.tank1.theta, gameState.tank1.defaultDirectionX, gameState.tank1.defaultDirectionY);
            gameState.tank1.directionX = newDirections.directionx;
            gameState.tank1.directionY = newDirections.directiony;
            updateTank1Box();
            informPlayers();
        }
        if (client.id === players[1]) {
            gameState.tank2.theta -= 0.06;
            const newDirections = calculateNewDirection(gameState.tank2.theta, gameState.tank2.defaultDirectionX, gameState.tank2.defaultDirectionY);
            gameState.tank2.directionX = newDirections.directionx;
            gameState.tank2.directionY = newDirections.directiony;
            updateTank2Box();
            informPlayers();
        }
    })

    client.on("rotateRight", () => {
        if (client.id === players[0]) {
            gameState.tank1.theta -= 0.06;
            const newDirections = calculateNewDirection(gameState.tank1.theta, gameState.tank1.defaultDirectionX, gameState.tank1.defaultDirectionY);
            gameState.tank1.directionX = newDirections.directionx;
            gameState.tank1.directionY = newDirections.directiony;
            updateTank1Box();
            informPlayers();
        }
        if (client.id === players[1]) {
            gameState.tank2.theta += 0.06;
            const newDirections = calculateNewDirection(gameState.tank2.theta, gameState.tank2.defaultDirectionX, gameState.tank2.defaultDirectionY);
            gameState.tank2.directionX = newDirections.directionx;
            gameState.tank2.directionY = newDirections.directiony;
            updateTank2Box();
            informPlayers();
        }
    })

    client.on("moveTank", () => {

        if (client.id === players[0] && checkIntersection(tank1Segments, borders, wallSegments, tank2Segments) === false) {
            gameState.tank1.centerX += gameState.tank1.directionX;
            gameState.tank1.centerY += gameState.tank1.directionY;

            gameState.tank1.distanceX += gameState.tank1.directionX;
            gameState.tank1.distanceY += gameState.tank1.directionY;
            updateTank1Box();
            informPlayers();
        }
        if (client.id === players[1] && !checkIntersection(tank2Segments, borders, wallSegments, tank1Segments)) {
            gameState.tank2.centerX += gameState.tank2.directionX;
            gameState.tank2.centerY += gameState.tank2.directionY;

            gameState.tank2.distanceX += gameState.tank2.directionX;
            gameState.tank2.distanceY += gameState.tank2.directionY;
            updateTank2Box();
            informPlayers();
        }
    })

    client.on("fireRequest", () => {
        if (client.id === players[0] && gameState.tank1.fireReady) {
            gameState.tank1.fireReady = false;
            io.emit("fireTank1", gameState);
        }
        if (client.id === players[1] && gameState.tank2.fireReady) {
            gameState.tank2.fireReady = false;
            io.emit("fireTank2", gameState);
        }
    })

    client.on("currentMissilePosition", (state) => {

        if (client.id === players[0]) {
            currentMissile1State = state;
            // bu currentMissileState bir ara null'lanmalı
            updateTank1MissileBox();
            if (missileHit(tank1MissileSegments, borders)) {
                gameState.tank1.missileDisappear = true;
                io.emit("removeTank1SavedState", gameState);
            }
            if (missileHit(tank1MissileSegments, tank2Segments)) {
                console.log("Tank1 hit Tank2");
                gameState.tank2.destroyed = true;
                gameState.tank1.missileDisappear = true;
            }
        }
        if (client.id === players[1]) {
            currentMissile2State = state;
            updateTank2MissileBox();
            if (missileHit(tank2MissileSegments, borders)) {
                gameState.tank2.missileDisappear = true;
                io.emit("removeTank2SavedState", gameState);
                // currentMissile2State = null;
            }
            if (missileHit(tank2MissileSegments, tank1Segments)) {
                console.log("Tank2 hit Tank1");
                gameState.tank1.destroyed = true;
                gameState.tank2.missileDisappear = true;
            }
        }
    })

    client.on("reloadRequest", () => {
        if (client.id === players[0] && gameState.tank1.missileDisappear) {
            setTimeout(() => {
                gameState.tank1.distanceMissileX = 0;
                gameState.tank1.distanceMissileY = 0;
                gameState.tank1.missileDisappear = false;
                gameState.tank1.fireReady = true;
                io.emit("reloadTank1", gameState);
            }, 1000);
        }
        if (client.id === players[1] && gameState.tank2.missileDisappear) {
            setTimeout(() => {
                gameState.tank2.distanceMissileX = 0;
                gameState.tank2.distanceMissileY = 0;
                gameState.tank2.missileDisappear = false;
                gameState.tank2.fireReady = true;
                io.emit("reloadTank2", gameState);
            }, 1000);
        }
    })
})


function informPlayers() {
    io.emit("stateChanged", gameState);
}


io.listen(3000);



























/***************************************** */
// Update methods

function updateTank1Box() {

    for (let i = 0; i < tank1Box.length; i++) {
        let x = tank1StartingCoordinates[i].x + gameState.tank1.distanceX;
        let y = tank1StartingCoordinates[i].y + gameState.tank1.distanceY;

        tank1Box[i].x = x - gameState.tank1.centerX;;
        tank1Box[i].y = y - gameState.tank1.centerY;

        x = tank1Box[i].x * Math.cos(gameState.tank1.theta) - tank1Box[i].y * Math.sin(gameState.tank1.theta);
        y = tank1Box[i].x * Math.sin(gameState.tank1.theta) + tank1Box[i].y * Math.cos(gameState.tank1.theta);

        tank1Box[i].x = x + gameState.tank1.centerX;
        tank1Box[i].y = y + gameState.tank1.centerY;
    }

    updateTank1Segments();
    updateTank1MissileBox();
}

function updateTank1MissileBox() {

    let state = currentMissile1State ? currentMissile1State : gameState

    for (let i = 0; i < tank1MissileBox.length; i++) {
        let x = tank1MissileStartingCoordinates[i].x + state.tank1.distanceX;
        let y = tank1MissileStartingCoordinates[i].y + state.tank1.distanceY;

        tank1MissileBox[i].x = x - state.tank1.centerX;;
        tank1MissileBox[i].y = y - state.tank1.centerY;

        x = tank1MissileBox[i].x * Math.cos(state.tank1.theta) - tank1MissileBox[i].y * Math.sin(state.tank1.theta);
        y = tank1MissileBox[i].x * Math.sin(state.tank1.theta) + tank1MissileBox[i].y * Math.cos(state.tank1.theta);

        tank1MissileBox[i].x = x + state.tank1.centerX + state.tank1.distanceMissileX;
        tank1MissileBox[i].y = y + state.tank1.centerY + state.tank1.distanceMissileY;
    }
    updateTank1MissileSegments();
}

function updateTank1Segments() {
    tank1Segments[0][0].x = tank1Box[0].x;
    tank1Segments[0][0].y = tank1Box[0].y;
    tank1Segments[0][1].x = tank1Box[1].x;
    tank1Segments[0][1].y = tank1Box[1].y;

    tank1Segments[1][0].x = tank1Box[1].x;
    tank1Segments[1][0].y = tank1Box[1].y;
    tank1Segments[1][1].x = tank1Box[3].x;
    tank1Segments[1][1].y = tank1Box[3].y;

    tank1Segments[2][0].x = tank1Box[3].x;
    tank1Segments[2][0].y = tank1Box[3].y;
    tank1Segments[2][1].x = tank1Box[2].x;
    tank1Segments[2][1].y = tank1Box[2].y;

    tank1Segments[3][0].x = tank1Box[2].x;
    tank1Segments[3][0].y = tank1Box[2].y;
    tank1Segments[3][1].x = tank1Box[0].x;
    tank1Segments[3][1].y = tank1Box[0].y;
    // console.log("*************************************************************")
    // for (let i = 0; i < tank1Segments.length; i++) {
    //     console.log(tank1Segments[i][0].x.toFixed(2) + " " + tank1Segments[i][0].y.toFixed(2));
    //     console.log(tank1Segments[i][1].x.toFixed(2) + " " + tank1Segments[i][1].y.toFixed(2));
    //     console.log("");
    // }
    // console.log("**********************************************************")
}

function updateTank1MissileSegments() {

    tank1MissileSegments[0][0].x = tank1MissileBox[0].x;
    tank1MissileSegments[0][0].y = tank1MissileBox[0].y;
    tank1MissileSegments[0][1].x = tank1MissileBox[1].x;
    tank1MissileSegments[0][1].y = tank1MissileBox[1].y;

    tank1MissileSegments[1][0].x = tank1MissileBox[1].x;
    tank1MissileSegments[1][0].y = tank1MissileBox[1].y;
    tank1MissileSegments[1][1].x = tank1MissileBox[2].x;
    tank1MissileSegments[1][1].y = tank1MissileBox[2].y;

    tank1MissileSegments[2][0].x = tank1MissileBox[2].x;
    tank1MissileSegments[2][0].y = tank1MissileBox[2].y;
    tank1MissileSegments[2][1].x = tank1MissileBox[0].x;
    tank1MissileSegments[2][1].y = tank1MissileBox[0].y;

    // console.table(tank1MissileBox);
    // console.log("*************************************************************")
    // for (let i = 0; i < tank1MissileSegments.length; i++) {
    //     console.log(tank1MissileSegments[i][0].x.toFixed(2) + " " + tank1MissileSegments[i][0].y.toFixed(2));
    //     console.log(tank1MissileSegments[i][1].x.toFixed(2) + " " + tank1MissileSegments[i][1].y.toFixed(2));
    //     console.log("");
    // }
    // console.log("**********************************************************")
    //
}

function updateTank2Box() {

    for (let i = 0; i < tank2Box.length; i++) {
        let x = tank2StartingCoordinates[i].x + gameState.tank2.distanceX;
        let y = tank2StartingCoordinates[i].y + gameState.tank2.distanceY;

        tank2Box[i].x = x - gameState.tank2.centerX;;
        tank2Box[i].y = y - gameState.tank2.centerY;

        x = tank2Box[i].x * Math.cos(gameState.tank2.theta) - tank2Box[i].y * Math.sin(gameState.tank2.theta);
        y = tank2Box[i].x * Math.sin(gameState.tank2.theta) + tank2Box[i].y * Math.cos(gameState.tank2.theta);

        tank2Box[i].x = x + gameState.tank2.centerX;
        tank2Box[i].y = y + gameState.tank2.centerY;
    }

    updateTank2Segments();
}

function updateTank2MissileBox() {

    let state = currentMissile2State ? currentMissile2State : gameState

    for (let i = 0; i < tank2MissileBox.length; i++) {
        let x = tank2MissileStartingCoordinates[i].x + state.tank2.distanceX;
        let y = tank2MissileStartingCoordinates[i].y + state.tank2.distanceY;

        tank2MissileBox[i].x = x - state.tank2.centerX;
        tank2MissileBox[i].y = y - state.tank2.centerY;

        x = tank2MissileBox[i].x * Math.cos(state.tank2.theta) - tank2MissileBox[i].y * Math.sin(state.tank2.theta);
        y = tank2MissileBox[i].x * Math.sin(state.tank2.theta) + tank2MissileBox[i].y * Math.cos(state.tank2.theta);

        tank2MissileBox[i].x = x + state.tank2.centerX + state.tank2.distanceMissileX;
        tank2MissileBox[i].y = y + state.tank2.centerY + state.tank2.distanceMissileY;
    }

    updateTank2MissileSegments();
}

function updateTank2Segments() {
    tank2Segments[0][0].x = tank2Box[0].x;
    tank2Segments[0][0].y = tank2Box[0].y;
    tank2Segments[0][1].x = tank2Box[1].x;
    tank2Segments[0][1].y = tank2Box[1].y;

    tank2Segments[1][0].x = tank2Box[1].x;
    tank2Segments[1][0].y = tank2Box[1].y;
    tank2Segments[1][1].x = tank2Box[3].x;
    tank2Segments[1][1].y = tank2Box[3].y;

    tank2Segments[2][0].x = tank2Box[3].x;
    tank2Segments[2][0].y = tank2Box[3].y;
    tank2Segments[2][1].x = tank2Box[2].x;
    tank2Segments[2][1].y = tank2Box[2].y;

    tank2Segments[3][0].x = tank2Box[2].x;
    tank2Segments[3][0].y = tank2Box[2].y;
    tank2Segments[3][1].x = tank2Box[0].x;
    tank2Segments[3][1].y = tank2Box[0].y;
    // console.log("*************************************************************")
    // for (let i = 0; i < tank1Segments.length; i++) {
    //     console.log(tank1Segments[i][0].x.toFixed(2) + " " + tank1Segments[i][0].y.toFixed(2));
    //     console.log(tank1Segments[i][1].x.toFixed(2) + " " + tank1Segments[i][1].y.toFixed(2));
    //     console.log("");
    // }
    // console.log("**********************************************************")
}

function updateTank2MissileSegments() {

    tank2MissileSegments[0][0].x = tank2MissileBox[0].x;
    tank2MissileSegments[0][0].y = tank2MissileBox[0].y;
    tank2MissileSegments[0][1].x = tank2MissileBox[1].x;
    tank2MissileSegments[0][1].y = tank2MissileBox[1].y;

    tank2MissileSegments[1][0].x = tank2MissileBox[1].x;
    tank2MissileSegments[1][0].y = tank2MissileBox[1].y;
    tank2MissileSegments[1][1].x = tank2MissileBox[2].x;
    tank2MissileSegments[1][1].y = tank2MissileBox[2].y;

    tank2MissileSegments[2][0].x = tank2MissileBox[2].x;
    tank2MissileSegments[2][0].y = tank2MissileBox[2].y;
    tank2MissileSegments[2][1].x = tank2MissileBox[0].x;
    tank2MissileSegments[2][1].y = tank2MissileBox[0].y;
}



///***************************************/ */



/********************************************* */
// Intersection methods


function lerp(left, right, x) {
    return left + (right - left) * x;
}

function getIntersection(A, B, C, D) {
    const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
    const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
    const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

    if (bottom !== 0) {
        const t = tTop / bottom;
        const u = uTop / bottom;
        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            return {
                x: lerp(A.x, B.x, t),
                y: lerp(A.y, B.y, t),
                offset: t,
            };
        }
    }

    return null;
}

function polyIntersection(poly1, poly2) {
    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly2.length; j++) {
            const touch = getIntersection(poly1[i],
                poly1[(i + 1) % poly1.length],
                poly2[j],
                poly2[(j + 1) % poly2.length]);
            if (touch) {
                return true;
            }
        }
    }
    return false;
}

function checkIntersection(poly1, poly2, poly3, poly4) {

    let result = false;

    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly2.length; j++) {
            result = polyIntersection(poly1[i], poly2[j]);
            if (result === true) {
                return true;
            }
        }
    }

    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly3.length; j++) {
            result = polyIntersection(poly1[i], poly3[j]);
            if (result === true) {
                return true;
            }
        }
    }

    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly4.length; j++) {
            result = polyIntersection(poly1[i], poly4[j]);
            if (result === true) {
                return true;
            }
        }
    }

    return result;
}

function missileHit(poly1, poly2) {

    let result = false;

    for (let i = 0; i < poly1.length; i++) {
        for (let j = 0; j < poly2.length; j++) {
            result = polyIntersection(poly1[i], poly2[j]);
            if (result === true) {
                return true;
            }
        }
    }
    return result;
}

//////////////////////////////////////////////


/*/************************************************************ */
///// Util methods

function calculateNewDirection(degree, x, y) {
    let sinValue = Math.sin(degree);
    let cosValue = Math.cos(degree);

    let directionx = x * cosValue - y * sinValue;
    let directiony = x * sinValue + y * cosValue;

    let result = { directionx, directiony };

    return result;
}


////////////////////////////////////////////*********************** */