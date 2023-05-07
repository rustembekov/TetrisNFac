var c;
var ctx;
var canvas;
var running = false;
var defaultSpeed = 0.03;
var speed = 0.03;
var controller;
var blockObjekt;
var naechstesObjekt;
var randomNumber = 0;
var gameOver = false;
var linearGradient;
var playPauseButton;
var level = 1;

var dialogOffen = false;

function setup() {

    c = document.getElementById('anzeige');
    ctx = c.getContext('2d');
    playPauseButton = document.getElementById('playbutton');
    graphics = new GUI();
    graphics.fillArray();
    canvas = createCanvas(graphics.blockBreite * graphics.blockColumnGrid, graphics.blockHoehe * graphics.blockRowGrid);
    canvas.parent('canvasDiv');
    canvas.id('canvasID');
    graphics.textStyle();
    graphics.drawAnzeigeNurBeiSetup();

    if (typeof (Storage) !== "undefined") {

        addScore();
        showScores(bubbleSort(HolEintraege()));
    }

    else {

        var p = createP("Your browser doesn't support the local storage of your score.");
        p.parent('localscores');
    }
    randomNumber = floor(random(0, 7));
    createNewObject();
    controller = new Control(blockObjekt);
}

function draw() {
    if (!gameOver) {

        blockObjekt.movementPossible();
        controller.erweiterteSteuerung();
        blockObjekt.display();
        background(0);
        if (!blockObjekt.isMoving && !blockObjekt.lastMove) {
            controller.reiheVoll();
            createNewObject();
            controller = new Control(blockObjekt);
        }
        graphics.grid();
        if (!gameOver) {
           graphics.drawObjects();
        }
        graphics.repaintField();
        if (running) {
            controller.gravity();
            playPauseButton.innerHTML = '&#10074;&#10074;';
        }
        else {
            graphics.drawAnzeige();
            playPauseButton.innerHTML = '&#9658;';
        }
    }
}

function keyPressed() {
    controller.steuerungLR();
}

function createNewObject() {
    nextObject();
    if (naechstesObjekt.createNewObjectIsPossible()) {
        blockObjekt = naechstesObjekt;
    }
    else {
        running = false;
        graphics.gameOver();
    }
}

function nextObject() {
    switch (randomNumber) {
        case 0:
            naechstesObjekt = new Square();
            break;
        case 1:
            naechstesObjekt = new StandardI();
            break;
        case 2:
            naechstesObjekt = new TurnZ();
            break;
        case 3:
            naechstesObjekt = new TurnLeft();
            break;
        case 4:
            naechstesObjekt = new StandardL();
            break;
        case 5:
            naechstesObjekt = new StandardT();
            break;
        case 6:
            naechstesObjekt = new StandardZ();
            break;
    }

    randomNumber = floor(random(0, 7));
    if (naechstesObjekt.createNewObjectIsPossible()) {

        ctx.lineWidth = 2;
        switch (randomNumber) {
            case 0:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#FFFF00";
                ctx.strokeStyle = "black";
                ctx.strokeRect(30, 22, 19, 19);
                ctx.fillRect(30, 22, 18, 18);
                ctx.strokeRect(50, 22, 19, 19);
                ctx.fillRect(50, 22, 18, 18);
                ctx.strokeRect(30, 42, 19, 19);
                ctx.fillRect(30, 42, 18, 18);
                ctx.strokeRect(50, 42, 19, 19);
                ctx.fillRect(50, 42, 18, 18);
                ctx.stroke();
                break;

            case 1:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#00FFFF";
                ctx.strokeStyle = "black";
                ctx.strokeRect(30, 22, 19, 19);
                ctx.fillRect(30, 22, 18, 18);
                ctx.strokeRect(30, 42, 19, 19);
                ctx.fillRect(30, 42, 18, 18);
                ctx.strokeRect(30, 62, 19, 19);
                ctx.fillRect(30, 62, 18, 18);
                ctx.strokeRect(30, 82, 19, 19);
                ctx.fillRect(30, 82, 18, 18);
                ctx.stroke();
                break;

            case 2:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#00FF00";
                ctx.strokeStyle = "black";
                ctx.strokeRect(30, 22, 19, 19);
                ctx.fillRect(30, 22, 18, 18);
                ctx.strokeRect(30, 42, 19, 19);
                ctx.fillRect(30, 42, 18, 18);
                ctx.strokeRect(50, 42, 19, 19);
                ctx.fillRect(50, 42, 18, 18);
                ctx.strokeRect(50, 62, 19, 19);
                ctx.fillRect(50, 62, 18, 18);
                ctx.stroke();
                break;

            case 3:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#0000FF";
                ctx.strokeStyle = "black";
                ctx.strokeRect(50, 22, 19, 19);
                ctx.fillRect(50, 22, 18, 18);
                ctx.strokeRect(50, 42, 19, 19);
                ctx.fillRect(50, 42, 18, 18);
                ctx.strokeRect(50, 62, 19, 19);
                ctx.fillRect(50, 62, 18, 18);
                ctx.strokeRect(30, 62, 19, 19);
                ctx.fillRect(30, 62, 18, 18);
                ctx.stroke();
                break;

            case 4:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#FF8000";
                ctx.strokeStyle = "black";
                ctx.strokeRect(30, 22, 19, 19);
                ctx.fillRect(30, 22, 18, 18);
                ctx.strokeRect(30, 42, 19, 19);
                ctx.fillRect(30, 42, 18, 18);
                ctx.strokeRect(30, 62, 19, 19);
                ctx.fillRect(30, 62, 18, 18);
                ctx.strokeRect(50, 62, 19, 19);
                ctx.fillRect(50, 62, 18, 18);
                ctx.stroke();
                break;

            case 5:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#FF00FF";
                ctx.strokeStyle = "black";
                ctx.strokeRect(50, 22, 19, 19);
                ctx.fillRect(50, 22, 18, 18);
                ctx.strokeRect(50, 42, 19, 19);
                ctx.fillRect(50, 42, 18, 18);
                ctx.strokeRect(50, 62, 19, 19);
                ctx.fillRect(50, 62, 18, 18);
                ctx.strokeRect(30, 42, 19, 19);
                ctx.fillRect(30, 42, 18, 18);
                ctx.stroke();
                break;

            case 6:
                ctx.fillStyle = "darkgreen";
                ctx.fillRect(25, 19, 60, 101);
                ctx.fillStyle = "#FF0000";
                ctx.strokeStyle = "black";
                ctx.strokeRect(50, 22, 19, 19);
                ctx.fillRect(50, 22, 18, 18);
                ctx.strokeRect(50, 42, 19, 19);
                ctx.fillRect(50, 42, 18, 18);
                ctx.strokeRect(30, 42, 19, 19);
                ctx.fillRect(30, 42, 18, 18);
                ctx.strokeRect(30, 62, 19, 19);
                ctx.fillRect(30, 62, 18, 18);
                ctx.stroke();
                break;

        }
    }
}
