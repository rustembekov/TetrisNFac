
function StandardI() {
    this.x = graphics.blockColumnGrid / 2 - 1;
    this.y = 0;
    this.farbCode = 2;
    this.platziert = -2;
    this.isMoving = true;
    this.senkrecht = true;
    this.hoehe = 4;
    this.breite = 1;
    this.lastMove = true;
    this.yCounter = 0;
    this.moveRightPossible = false;
    this.moveLeftPossible = false;
    this.display = function () {

        if (this.senkrecht) {
            if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
                graphics.gridArray[round(this.y)][this.x] = this.farbCode;
                graphics.gridArray[round(this.y) + 1][this.x] = this.farbCode;
                graphics.gridArray[round(this.y) + 2][this.x] = this.farbCode;
                graphics.gridArray[round(this.y) + 3][this.x] = this.farbCode;
                this.lastMove = true;
            } else if (this.lastMove) {
                graphics.gridArray[round(this.y)][this.x] = this.farbCode;
                graphics.gridArray[round(this.y) + 1][this.x] = this.farbCode;
                graphics.gridArray[round(this.y) + 2][this.x] = this.farbCode;
                graphics.gridArray[round(this.y) + 3][this.x] = this.farbCode;
                this.isMoving = true;
            } else {
                graphics.gridArray[round(this.y)][this.x] = this.platziert;
                graphics.gridArray[round(this.y) + 1][this.x] = this.platziert;
                graphics.gridArray[round(this.y) + 2][this.x] = this.platziert;
                graphics.gridArray[round(this.y) + 3][this.x] = this.platziert;
                this.isMoving = false;
            }
        } else {
            if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
                graphics.gridArray[round(this.y)][this.x] = this.farbCode;
                graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
                graphics.gridArray[round(this.y)][this.x + 2] = this.farbCode;
                graphics.gridArray[round(this.y)][this.x + 3] = this.farbCode;
                this.lastMove = true;
            } else if (this.lastMove) {
                graphics.gridArray[round(this.y)][this.x] = this.farbCode;
                graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
                graphics.gridArray[round(this.y)][this.x + 2] = this.farbCode;
                graphics.gridArray[round(this.y)][this.x + 3] = this.farbCode;
                this.isMoving = true;
            } else {
                graphics.gridArray[round(this.y)][this.x] = this.platziert;
                graphics.gridArray[round(this.y)][this.x + 1] = this.platziert;
                graphics.gridArray[round(this.y)][this.x + 2] = this.platziert;
                graphics.gridArray[round(this.y)][this.x + 3] = this.platziert;
                this.isMoving = false;
            }
        }
    }
    this.drehen = function () {
        var tauschen = this.hoehe;
        if (this.senkrecht) {
            if (this.x > 1 && round(this.y) < graphics.blockRowGrid - 1) {
                if (graphics.gridArray[round(this.y + 1)][this.x - 2] == 0 && graphics.gridArray[round(this.y + 1)][this.x - 1] == 0
                    && graphics.gridArray[round(this.y + 1)][this.x + 1] == 0) {
                    this.x = this.x - 2;
                    this.y = this.y + 1;
                    this.hoehe = this.breite;
                    this.breite = tauschen;
                    this.senkrecht = !this.senkrecht;
                }
            }
        } else {
            if (this.x < graphics.blockColumnGrid - 2 && round(this.y) < graphics.blockRowGrid - 2) {
                if (graphics.gridArray[round(this.y - 1)][this.x + 2] == 0 && graphics.gridArray[round(this.y + 1)][this.x + 2] == 0
                    && graphics.gridArray[round(this.y + 2)][this.x + 2] == 0) {
                    this.x = this.x + 2;
                    this.y = this.y - 1;
                    this.hoehe = this.breite;
                    this.breite = tauschen;
                    this.senkrecht = !this.senkrecht;
                }
            }
        }
    }
    this.freierFall = function () {
        for (var i = floor(this.y + this.hoehe); i < graphics.blockRowGrid; i++) {
            if (this.senkrecht) {
                if (graphics.gridArray[i][this.x] < 0) {
                    this.y = i - this.hoehe;
                    this.isMoving = false;
                    break;
                } else {
                    this.y = graphics.blockRowGrid - this.hoehe;
                    this.isMoving = false;
                }
            } else {
                if (graphics.gridArray[i][this.x] < 0 || graphics.gridArray[i][this.x + 1] < 0 || graphics.gridArray[i][this.x + 2] < 0 || graphics.gridArray[i][this.x + 3] < 0) {
                    this.y = i - this.hoehe;
                    this.isMoving = false;
                    break;
                } else {
                    this.y = graphics.blockRowGrid - this.hoehe;
                    this.isMoving = false;
                }
            }
        }
        this.lastMove = false;
    }
    this.gravity = function () {

        this.yCounter += speed;
        if (this.senkrecht) {
            if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
                if (graphics.gridArray[round(this.y + this.hoehe)][this.x] == 0) {
                    this.y += speed;
                } else {
                    this.isMoving = false;
                }
            }
        } else {
            if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
                if (graphics.gridArray[round(this.y + this.hoehe)][this.x] == 0 && graphics.gridArray[round(this.y + this.hoehe)][this.x + 1] == 0 &&
                    graphics.gridArray[round(this.y + this.hoehe)][this.x + 2] == 0 && graphics.gridArray[round(this.y + this.hoehe)][this.x + 3] == 0) {
                    this.y += speed;
                } else {
                    this.isMoving = false;
                }
            }
        }
        if (round(this.yCounter) >= round(this.y + 1)) {
            this.lastMove = false;
        }
    }
    this.bewegungRechts = function () {
        if (this.moveRightPossible) {
            this.x += 1;
        }
    }
    this.bewegungLinks = function () {
        if (this.moveLeftPossible) {
            this.x -= 1;
        }
    }
    this.createNewObjectIsPossible = function () {
        if (!(graphics.gridArray[round(this.y)][this.x] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x] < 0) &&
            !(graphics.gridArray[round(this.y + 2)][this.x] < 0) && !(graphics.gridArray[round(this.y + 3)][this.x] < 0)) {
            return true;
        } else {
            return false;
        }
    }
    this.movementPossible = function () {

        if (this.senkrecht) {
            if (this.x > 0) {
                if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) &&
                    !(graphics.gridArray[round(this.y + 2)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 3)][this.x - 1] < 0)) {
                    this.moveLeftPossible = true;
                } else {
                    this.moveLeftPossible = false;
                }
            } else {
                this.moveLeftPossible = false;
            }
        } else {
            if (this.x > 0) {
                if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0)) {
                    this.moveLeftPossible = true;
                } else {
                    this.moveLeftPossible = false;
                }
            } else {
                this.moveLeftPossible = false;
            }
        }
        if (this.senkrecht) {
            if (this.x < graphics.blockColumnGrid - this.breite) {
                if (!(graphics.gridArray[round(this.y)][this.x + this.breite] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + this.breite] < 0) &&
                    !(graphics.gridArray[round(this.y + 2)][this.x + this.breite] < 0) && !(graphics.gridArray[round(this.y + 3)][this.x + this.breite] < 0)) {
                    this.moveRightPossible = true;
                } else {
                    this.moveRightPossible = false;
                }
            } else {
                this.moveRightPossible = false;
            }
        } else {
            if (this.x < graphics.blockColumnGrid - this.breite) {
                if (!(graphics.gridArray[round(this.y)][this.x + this.breite] < 0)) {
                    this.moveRightPossible = true;
                } else {
                    this.moveRightPossible = false;
                }
            } else {
                this.moveRightPossible = false;
            }
        }
    }
}
