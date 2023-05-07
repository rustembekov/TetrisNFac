var bewegenOK = true;
var einfachBewegt;
var resetSpeed = 0.03;

function Control(object) {
    this.xLeft = object.x - 1;
    this.xRight = object.x + 1;
    this.steuerungLR = function () {
        if ((keyCode == 13 || keyCode == 80) && !dialogOffen) {
            running = !running;
            graphics.start = false;
        }

        if ((running && object.isMoving) || (running && object.lastMove)) {
            if ((keyCode == LEFT_ARROW || keyCode == 65) && bewegenOK) {
                object.bewegungLinks();
                einfachBewegt = true;
                setTimeout(function () {
                    einfachBewegt = false
                }, 150);
            } else if ((keyCode == RIGHT_ARROW || keyCode == 68) && bewegenOK) {
                object.bewegungRechts();
                einfachBewegt = true;
                setTimeout(function () {
                    einfachBewegt = false
                }, 150);
            } else if ((keyCode == UP_ARROW || keyCode == 87)) {
                object.drehen();
            } else if (keyCode == 32) {
                object.freierFall();
            }
        } else if (gameOver && keyCode == 13) {
            setup();
            gameOver = false;
            running = true;
            graphics.start = false;
        }
    }

    this.gravity = function () {
        object.gravity();
    }
    this.reiheVoll = function () {
        for (var i = 0; i < graphics.blockRowGrid; i++) {
            var reiheVoll = true;
            for (j = 0; j < graphics.blockColumnGrid; j++) {
                if (!(graphics.gridArray[i][j] < 0)) {
                    reiheVoll = false;
                    break;
                }
            }
            if (reiheVoll) {
                graphics.deleteVolleReihe(i);
            }
        }
    }

    this.erweiterteSteuerung = function () {

        if ((running && object.isMoving) || (running && object.lastMove)) {
            if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
                speed = 0.35;
            } else {
                speed = defaultSpeed;
            }
            if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
                if (object.moveLeftPossible && bewegenOK && !einfachBewegt) {
                    bewegenOK = false;
                    object.x -= 1;
                    setTimeout(function () {
                        bewegenOK = true
                    }, 150);
                }
            }
            if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
                if (object.moveRightPossible && bewegenOK && !einfachBewegt) {
                    bewegenOK = false;
                    object.x += 1;
                    setTimeout(function () {
                        bewegenOK = true
                    }, 150);
                }
            }
        }
    }
}
