function StandardL() {
  this.x = graphics.blockColumnGrid / 2 - 1;
  this.y = 0;
  this.farbCode = 7;
  this.platziert = -7;
  this.isMoving = true;
  this.senkrecht = true;
  this.senkrechtGedreht = false;
  this.quer = false;
  this.querGedreht = false;
  this.hoehe = 3;
  this.breite = 2;
  this.lastMove = true;
  this.yCounter = 0;
  this.moveRightPossible = false;
  this.moveLeftPossible = false;
  this.display = function() {

    if (this.senkrecht) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 1][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 2][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 2][this.x + 1] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 1][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 2][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 2][this.x + 1] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 1][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 2][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 2][this.x + 1] = this.platziert;
        this.isMoving = false;
      }
    }

    else if (this.senkrechtGedreht) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 2)][this.x + 1] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 2)][this.x + 1] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y)][this.x + 1] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x + 1] = this.platziert;
        graphics.gridArray[round(this.y + 2)][this.x + 1] = this.platziert;
        this.isMoving = false;
      }
    }
    else if (this.quer) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 2] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 2] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 1][this.x] = this.platziert;
        graphics.gridArray[round(this.y)][this.x + 1] = this.platziert;
        graphics.gridArray[round(this.y)][this.x + 2] = this.platziert;
        this.isMoving = false;
      }
    }
    else if (this.querGedreht) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x - 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x - 2] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x - 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x - 2] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x - 1] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x - 2] = this.platziert;
        this.isMoving = false;
      }
    }
  }
  this.drehen = function() {

    var tauschen = this.hoehe;
    if (this.senkrecht) {
      if (this.x > 0) {
        if (!(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x - 1] < 0)) {
          this.x = this.x - 1;
          this.y = this.y + 1;
          this.hoehe = this.breite;
          this.breite = tauschen;
          this.senkrecht = !this.senkrecht;
          this.quer = !this.quer;
        }
      }
    }
    else if (this.quer) {
      if (round(this.y > 0)) {
        if (!(graphics.gridArray[round(this.y - 1)][this.x] < 0) && !(graphics.gridArray[round(this.y - 1)][this.x + 1] < 0) &&
        !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0)) {
          this.y = this.y - 1;
          this.hoehe = this.breite;
          this.breite = tauschen;
          this.quer = !this.quer;
          this.senkrechtGedreht = !this.senkrechtGedreht;
        }
      }
    }
    else if (this.senkrechtGedreht) {
      if (this.x + 2 < graphics.blockColumnGrid) {
        if (!(graphics.gridArray[round(this.y + 1)][this.x] < 0) && !(graphics.gridArray[round(this.y)][this.x + 2] < 0) &&
        !(graphics.gridArray[round(this.y + 1)][this.x + 2] < 0)) {
          this.x = this.x + 2;
          this.hoehe = this.breite;
          this.breite = tauschen;
          this.senkrechtGedreht = !this.senkrechtGedreht;
          this.querGedreht = !this.querGedreht;
        }
      }
    }
    else if (this.querGedreht) {
      if (round(this.y + 2) < graphics.blockRowGrid) {
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x - 1] < 0)) {
          this.x = this.x - 1;
          this.hoehe = this.breite;
          this.breite = tauschen;
          this.querGedreht = !this.querGedreht;
          this.senkrecht = !this.senkrecht;
        }
      }
    }
  }
  this.freierFall = function() {

    for (var i = floor(this.y); i < graphics.blockRowGrid; i++) {
      if (this.senkrecht) {

         if (graphics.gridArray[i][this.x] < 0 || graphics.gridArray[i][this.x + 1]) {
          this.y = i - this.hoehe;
          this.isMoving = false;
          break;
          }
          else {
            this.y = graphics.blockRowGrid - this.hoehe;
            this.isMoving = false;
          }
        }
        else if (this.senkrechtGedreht) {
          if (graphics.gridArray[i][this.x + 1] < 0) {
            this.y = i - this.hoehe;
            this.isMoving = false;
            break;
          }
          else if (i > 1) {

            if (graphics.gridArray[i - 2][this.x] < 0) {
              this.y = i - this.hoehe;
              this.isMoving = false;
              break;
            }
            else {

              this.y = graphics.blockRowGrid - this.hoehe;
              this.isMoving = false;
            }
          }
        }
        else if (this.quer) {
          if (graphics.gridArray[i][this.x] < 0) {
            this.y = i - this.hoehe;
            this.isMoving = false;
            break;
          }
          else if (i > 0) {
            if (graphics.gridArray[i - 1][this.x + 1] < 0 || graphics.gridArray[i - 1][this.x + 2] < 0) {
              this.y = i - this.hoehe;
              this.isMoving = false;
              break;
            }
            else {
              this.y = graphics.blockRowGrid - this.hoehe;
              this.isMoving = false;
            }
          }
        }
        else if (this.querGedreht) {
          if (graphics.gridArray[i][this.x] < 0 || graphics.gridArray[i][this.x - 1] < 0 || graphics.gridArray[i][this.x - 2] < 0) {
            this.y = i - this.hoehe;
            this.isMoving = false;
            break;
          }
          else {
            this.y = graphics.blockRowGrid - this.hoehe;
            this.isMoving = false;
          }
        }
      }
      this.lastMove = false;
    }
  this.gravity = function() {

    this.yCounter += speed;
    if (this.senkrecht) {
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        if (graphics.gridArray[round(this.y + this.hoehe)][this.x] == 0 && graphics.gridArray[round(this.y + this.hoehe)][this.x + 1] == 0) {
          this.y += speed;
        }
        else {
          this.isMoving = false;
        }
      }
    }
    else if (this.senkrechtGedreht) {
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        if (graphics.gridArray[round(this.y + 1)][this.x] == 0 && graphics.gridArray[round(this.y + this.hoehe)][this.x + 1] == 0) {
          this.y += speed;
        }
        else {
          this.isMoving = false;
        }
      }
    }
    else if (this.quer) {
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        if (graphics.gridArray[round(this.y + 2)][this.x] == 0 && graphics.gridArray[round(this.y + 1)][this.x + 1] == 0 &&
        graphics.gridArray[round(this.y + 1)][this.x + 2] == 0) {
          this.y += speed;
        }
        else {
          this.isMoving = false;
        }
      }
    }
    else if (this.querGedreht) {
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        if (graphics.gridArray[round(this.y + 2)][this.x] == 0 && graphics.gridArray[round(this.y + 2)][this.x - 1] == 0 &&
        graphics.gridArray[round(this.y + 2)][this.x - 2] == 0) {
          this.y += speed;
        }
        else {
          this.isMoving = false;
        }
      }
    }
    if (round(this.yCounter) >= round(this.y + 1)) {
      this.lastMove = false;
    }
  }
  this.bewegungRechts = function() {
    if (this.moveRightPossible) {
      this.x += 1;
    }
  }
  this.bewegungLinks = function() {
    if (this.moveLeftPossible) {
      this.x -= 1;
    }
  }

  this.createNewObjectIsPossible = function() {

    if (!(graphics.gridArray[round(this.y)][this.x] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x] < 0) &&
    !(graphics.gridArray[round(this.y + 2)][this.x] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x + 1] < 0)) {
      return true;
    }
    else {
      return false;
    }
  }
  this.movementPossible = function() {

    if (this.senkrecht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x > 0) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) &&
        !(graphics.gridArray[round(this.y + 2)][this.x - 1] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach links bewegt
          this.moveLeftPossible = true;
        }
        else {
          this.moveLeftPossible = false;
        }
      }
      else {
        this.moveLeftPossible = false;
      }
    }
    //Wenn der Stein senkrecht gedreht ist
    else if (this.senkrechtGedreht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x > 0) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach links bewegt
          this.moveLeftPossible = true;
        }
        else {
          this.moveLeftPossible = false;
        }
      }
      else {
        this.moveLeftPossible = false;
      }
    }
    //Wenn der Stein quer liegt
    else if (this.quer) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x > 0) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach links bewegt
          this.moveLeftPossible = true;
        }
        else {
          this.moveLeftPossible = false;
        }
      }
      else {
        this.moveLeftPossible = false;
      }
    }
    //Wenn der Stein quer gedreht ist
    else if (this.querGedreht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x - 2 > 0) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - this.breite] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach links bewegt
          this.moveLeftPossible = true;
        }
        else {
          this.moveLeftPossible = false;
        }
      }
      else {
        this.moveLeftPossible = false;
      }
    }
    //rechts
    //Wenn der Stein senkrecht ist
    if (this.senkrecht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x < graphics.blockColumnGrid - this.breite) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x + 2] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach rechts bewegt
          this.moveRightPossible = true;
        }
        else {
          this.moveRightPossible = false;
        }
      }
      else {
        this.moveRightPossible = false;
      }
    }
    //Wenn der Stein senkrecht gedreht ist
    else if (this.senkrechtGedreht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x < graphics.blockColumnGrid - this.breite) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x + 2] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 2] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x + 2] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach rechts bewegt
          this.moveRightPossible = true;
        }
        else {
          this.moveRightPossible = false;
        }
      }
      else {
        this.moveRightPossible = false;
      }
    }
    //Wenn der Stein quer liegt
    else if (this.quer) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x < graphics.blockColumnGrid - this.breite) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y)][this.x + this.breite] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach rechts bewegt
          this.moveRightPossible = true;
        }
        else {
          this.moveRightPossible = false;
        }
      }
      else {
        this.moveRightPossible = false;
      }
    }
    //Wenn der Stein quer gedreht ist
    else if (this.querGedreht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x + 1 < graphics.blockColumnGrid) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0)) {
          //Sollte ausreichend Platz sein, wird das Objekt ein Block nach rechts bewegt
          this.moveRightPossible = true;
        }
        else {
          this.moveRightPossible = false;
        }
      }
      else {
        this.moveRightPossible = false;
      }
    }
  }
}
