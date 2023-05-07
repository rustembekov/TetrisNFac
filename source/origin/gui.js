var gameoverSound = new Audio("./sounds/Gameover.wav");
var soundLineClear = new Audio("./sounds/Lineclear.wav");

function GUI() {
    this.score = 0;
    this.scoreX = 235;
    this.blockBreite = 22;
    this.blockHoehe = this.blockBreite;
    this.blockColumnGrid = 10;
    this.blockRowGrid = 20;
    this.gridArray = [this.blockRowGrid];
    this.start = true;
    this.grid = function () {
        stroke("darkgreen");
        strokeWeight(2.5);
        noFill();
        for (var i = 0; i < this.blockRowGrid; i++) {
            for (var j = 0; j < this.blockColumnGrid; j++) {
                rect(j * this.blockBreite, i * this.blockHoehe, this.blockBreite, this.blockHoehe);
            }
        }
    }
    this.fillArray = function () {
        for (var i = 0; i < this.blockRowGrid; i++) {
            this.gridArray[i] = new Array(this.blockColumnGrid);
        }
        for (var i = 0; i < this.blockRowGrid; i++) {
            for (var j = 0; j < this.blockColumnGrid; j++) {
                this.gridArray[i][j] = 0;
            }
        }
    }

    this.deleteVolleReihe = function (index) {

        for (var i = 0; i < graphics.blockColumnGrid; i++) {
            graphics.gridArray[index][i] = 0;
        }
        this.updateRows(index);
        this.updateScore();
        realTimeScore();
        showScores(bubbleSort(HolEintraege()));
    }

    this.drawObjects = function () {

        for (var i = 0; i < this.blockRowGrid; i++) {
            for (var j = 0; j < this.blockColumnGrid; j++) {
                if (this.gridArray[i][j] != 0) {
                    if (this.gridArray[i][j] == 7 || this.gridArray[i][j] == -7) {
                        fill(255, 128, 0);
                    } else if (this.gridArray[i][j] == 6 || this.gridArray[i][j] == -6) {
                        fill(255, 0, 0);
                    } else if (this.gridArray[i][j] == 5 || this.gridArray[i][j] == -5) {
                        fill(0, 255, 0);
                    } else if (this.gridArray[i][j] == 4 || this.gridArray[i][j] == -4) {
                        fill(0, 0, 255);
                    } else if (this.gridArray[i][j] == 3 || this.gridArray[i][j] == -3) {
                        fill(255, 0, 255);
                    } else if (this.gridArray[i][j] == 2 || this.gridArray[i][j] == -2) {
                        fill(0, 255, 255);
                    } else if (this.gridArray[i][j] == 1 || this.gridArray[i][j] == -1) {
                        fill(255, 255, 0);
                    }
                    stroke(5);
                    rect(j * this.blockBreite, i * this.blockHoehe, this.blockBreite, this.blockHoehe);
                }
            }
        }
    }
    this.repaintField = function () {
        for (var i = 0; i < this.blockRowGrid; i++) {
            for (var j = 0; j < this.blockColumnGrid; j++) {
                if (this.gridArray[i][j] > 0) {
                    this.gridArray[i][j] = 0;
                }
            }
        }
    }
    this.gameOver = function () {
        if (typeof (Storage) !== "undefined") {
            realTimeScore();
            showScores(bubbleSort(HolEintraege()));
        } else {
            var p = createP("Your browser doesn't support the local storage of your score.");
            p.parent('localscores');
        }

        gameOver = true;

        level = 1;
        this.updateLevel();
        this.textStyle();
        vtx.font = "20px impact"
        vtx.fillText("Press Enter to Play again!", 5, canvas.height / 2 + this.blockHoehe);
        vtx.font = "20px impact";
        vtx.fillText("Score: " + this.score, 5, canvas.height / 2 + 4 * this.blockHoehe);
        vtx.font = "35px impact";
        vtx.fillText("Game Over!", 5, canvas.height / 2 - this.blockHoehe);
        gameoverSound.play();
    }
    this.updateScore = function () {
        this.score += this.blockColumnGrid;
        if (this.score > 9) {
            this.scoreX = 225;
        }
        if (this.score > 99) {
            this.scoreX = 215;
            level = 2;
        }

        if (this.score > 150) {
            this.scoreX = 205;
            level = 3;
        }
        if (this.score > 200) {
            this.scoreX = 195;
            level = 4;
        }
        if (this.score > 99999) {
            this.scoreX = 185;
            level = 5;
        }
        this.drawAnzeige();
        this.updateLevel();
        soundLineClear.play();

    }

    this.updateRows = function (index) {
        for (var i = index - 1; i > 0; i--) {
            for (j = 0; j < this.blockColumnGrid; j++) {
                this.gridArray[i + 1][j] = this.gridArray[i][j];
                this.gridArray[i][j] = 0;
            }
        }
        controller.reiheVoll();
    }


    this.drawAnzeige = function () {
        var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = "darkgreen";
        ctx.fillRect(100, 25, 200, 55);
        ctx.font = "30px Bold";
        ctx.fillStyle = gradient;
        ctx.fillText(graphics.score, this.scoreX, 50);
        vtx.fillStyle = linearGradient;
        if (this.start) {

            vtx.fillText("Press Enter to Start!", (1.5 * this.blockBreite - 1) - 20, canvas.height / 2 - this.blockHoehe);
        } else if (!gameOver) {
            vtx.fillText("PAUSED", canvas.width / 3, this.blockHoehe);
            vtx.fillText("Press Enter to Continue!", this.blockBreite / 2, 2 * this.blockHoehe);
            vtx.font = "18px Bold"
        }
    }
    this.drawAnzeigeNurBeiSetup = function () {
        ctx.fillStyle = "darkgreen";
        ctx.fillRect(25, 5, 250, 15);
        ctx.fillRect(100, 25, 200, 55);
        var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        gradient.addColorStop(0, "rgba(255,255, 0, 1)");
        gradient.addColorStop(0.15, "rgba(255, 255, 0, 1)");
        gradient.addColorStop(0.3, "rgba(0, 255, 0, 1)");
        gradient.addColorStop(0.5, "rgba(0, 255, 255, 1)");
        gradient.addColorStop(0.65, "rgba(0, 0, 255, 1)");
        gradient.addColorStop(0.8, "rgba(255, 0, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 0, 0, 1)");
        ctx.strokeStyle = gradient;
        ctx.font = "20px Arial";
        ctx.strokeText("Next", 30, 15);
        ctx.strokeStyle = "yellow";
        ctx.strokeText("Score", 220, 15);

        ctx.fillStyle = "darkgreen";
        ctx.fillRect(100, 35, 200, 45);
        ctx.font = "30px Verdana";
        ctx.fillStyle = gradient;
        ctx.fillText(graphics.score, this.scoreX, 50);
    }
    this.textStyle = function () {
        v = document.getElementById("canvasID");
        vtx = v.getContext("2d");
        linearGradient = vtx.createLinearGradient(0, 0, v.width, 0);
        linearGradient.addColorStop(0, "rgba(255,255, 0, 1)");
        linearGradient.addColorStop(0.15, "rgba(255, 255, 0, 1)");
        linearGradient.addColorStop(0.3, "rgba(0, 255, 0, 1)");
        linearGradient.addColorStop(0.5, "rgba(0, 255, 255, 1)");
        linearGradient.addColorStop(0.65, "rgba(0, 0, 255, 1)");
        linearGradient.addColorStop(0.8, "rgba(255, 0, 255, 1)");
        linearGradient.addColorStop(1, "rgba(255, 0, 0, 1)");
        vtx.fillStyle = linearGradient;
        vtx.font = "25px impact";
    }
    this.updateLevel = function () {
        switch (level) {
            //Level 1
            case 1:
                resetSpeed = 0.03;
                defaultSpeed = 0.03;
                speed = 0.03;
                break;
            //Level 2
            case 2:
                resetSpeed = 0.04;
                defaultSpeed = 0.04;
                speed = 0.04;
                break;
            //Level 3
            case 3:
                resetSpeed = 0.06;
                defaultSpeed = 0.06;
                speed = 0.06;
                break;
            //Level 4
            case 4:
                resetSpeed = 0.08;
                defaultSpeed = 0.08;
                speed = 0.08;
                break;
            //Level 5
            case 5:
                resetSpeed = 0.15;
                defaultSpeed = 0.15;
                speed = 0.15;
                break;
        }
    }
}
