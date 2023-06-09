function TurnLeft() {
  this.x = graphics.blockColumnGrid / 2 - 1;
  this.y = 0;
  this.farbCode = 4;
  this.platziert = -4;
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
        graphics.gridArray[round(this.y) + 2][this.x - 1] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 1][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 2][this.x] = this.farbCode;
        graphics.gridArray[round(this.y) + 2][this.x - 1] = this.farbCode;
        this.isMoving = true;
      }

      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 1][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 2][this.x] = this.platziert;
        graphics.gridArray[round(this.y) + 2][this.x - 1] = this.platziert;
        this.isMoving = false;
      }
    }
    else if (this.senkrechtGedreht) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 2)][this.x] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 2)][this.x] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y)][this.x + 1] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x] = this.platziert;
        graphics.gridArray[round(this.y + 2)][this.x] = this.platziert;
        this.isMoving = false;
      }
    }

    else if (this.quer) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 2] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 2] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x + 1] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x + 2] = this.platziert;
        this.isMoving = false;
      }
    }
    else if (this.querGedreht) {
      if (this.isMoving && round(this.y) + this.hoehe < graphics.blockRowGrid) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 2] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 2] = this.farbCode;
        this.lastMove = true;
      }
      else if (this.lastMove) {
        graphics.gridArray[round(this.y)][this.x] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 1] = this.farbCode;
        graphics.gridArray[round(this.y)][this.x + 2] = this.farbCode;
        graphics.gridArray[round(this.y + 1)][this.x + 2] = this.farbCode;
        this.isMoving = true;
      }
      else {
        graphics.gridArray[round(this.y)][this.x] = this.platziert;
        graphics.gridArray[round(this.y)][this.x + 1] = this.platziert;
        graphics.gridArray[round(this.y)][this.x + 2] = this.platziert;
        graphics.gridArray[round(this.y + 1)][this.x + 2] = this.platziert;
        this.isMoving = false;
      }
    }
  }
  this.drehen = function() {

    var tauschen = this.hoehe;
    if (this.senkrecht) {
      if (this.x > 0 && this.x < graphics.blockColumnGrid - 1) {
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0)) {
          //Ist ausreichend Platz, wird die Position angepasst
          this.x = this.x - 1;
          //Hoehe und Breite werden vertauscht
          this.hoehe = this.breite;
          this.breite = tauschen;
          //Das Objekt ist nun nicht mehr senkrecht
          this.senkrecht = !this.senkrecht;
          //Das Objekt ist nun quer
          this.quer = !this.quer;
        }
      }
    }
    //Wenn es quer liegt, wird es senkrecht gedreht
    else if (this.quer) {
      //Erst mal sicherstellen, dass das Array nicht verlassen wird
      if (round(this.y < graphics.blockRowGrid - 1)) {
        //Dann pruefen, ob ausreichend Platz zum drehen vorhanden ist
        if (!(graphics.gridArray[round(this.y)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y)][this.x + 2] < 0) &&
        !(graphics.gridArray[round(this.y + 2)][this.x + 1] < 0)) {
          //Sind alle Bedingungen erfuellt, dann kann gedreht werden und die Position wird aktualisiert
          this.x = this.x + 1;
          //Zudem werden Hoehe und Breite getauscht
          this.hoehe = this.breite;
          this.breite = tauschen;
          //Das Objekt ist nun nicht mehr quer
          this.quer = !this.quer;
          //Sondern senkrecht gedreht
          this.senkrechtGedreht = !this.senkrechtGedreht;
        }
      }
    }
    //Wenn es senkrecht gedreht ist, wird es quer gedreht
    else if (this.senkrechtGedreht) {
      //Erst mal sicherstellen, dass das Array nicht verlassen wird
      if (this.x > 0) {
        //Dann pruefen, ob ausreichend Platz zum drehen vorhanden ist
        if (!(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) &&
        !(graphics.gridArray[round(this.y + 2)][this.x + 1] < 0)) {
          //Sollte alles erfuellt sein, wird die Position angepasst
          this.x = this.x - 1;
          this.y = this.y + 1;
          //Zudem werden Breite und Hoehe getauscht
          this.hoehe = this.breite;
          this.breite = tauschen;
          //Das Objekt ist nicht mehr senkrecht gedreht
          this.senkrechtGedreht = !this.senkrechtGedreht;
          //Sondern jetzt quer gedreht
          this.querGedreht = !this.querGedreht;
        }
      }
    }
    //Wenn es quer gedreht ist, wird es wieder senkrecht
    else if (this.querGedreht) {
      //Erst mal sicherstellen, dass das Array nicht verlassen wird
      if (round(this.y) > 0) {
        //Dann pruefen, ob ausreichend Platz zum drehen vorhanden ist
        if (!(graphics.gridArray[round(this.y - 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x] < 0)) {
          //Wenn die Bedingungen erfuellt sind, kann gedreht werden und die Position wird angepasst
          this.x = this.x + 1;
          this.y = this.y - 1;
          //Hoehe und Breite werden getauscht
          this.hoehe = this.breite;
          this.breite = tauschen;
          //Das Objekt ist nicht mehr quer gedreht
          this.querGedreht = !this.querGedreht;
          //sondern jetzt senkrecht
          this.senkrecht = !this.senkrecht;
        }
      }
    }
  }
  //Funktion zum schnellen Fallenlassen eines Objektes
  this.freierFall = function() {
    //Ausgehend vom aktuellen y Wert (abgerundet mit floor) unter dem Stein werden alle Felder dieser Spalte durchlaufen
    for (var i = floor(this.y); i < graphics.blockRowGrid; i++) {
      //wenn der Stein senkrecht steht
      if (this.senkrecht) {
         //Wenn es ein Hindernis gibt, dann fuehre dies aus
         if (graphics.gridArray[i][this.x] < 0 || graphics.gridArray[i][this.x - 1]) {
           //Gibt es ein Hindernis, so wird der Stein genau darauf platziert
          this.y = i - this.hoehe;
          //bewegt sich nicht weiter
          this.isMoving = false;
          //und die Schleife bricht ab
          break;
          }
          //Sollte nirgendwo ein Hindernis sein, dann
          else {
            //dann kann der Stein nach ganz unten fallen und dort platziert werden
            this.y = graphics.blockRowGrid - this.hoehe;
            //und bewegt sich auch dann nicht mehr weiter
            this.isMoving = false;
          }
        }
        //Wenn der Stein senkrecht gedreht ist
        else if (this.senkrechtGedreht) {
          //Wieder erst mal pruefen, ob es ein Hindernis gibt
          if (graphics.gridArray[i][this.x] < 0) {
            //Wenn ja dann wird der Stein direkt darauf platziert
            this.y = i - this.hoehe;
            //bewegt sich nicht weiter
            this.isMoving = false;
            //und die Schleife wird abgebrochen
            break;
          }
          //Wenn dort kein Hindernis war, muss noch an einer weiteren moeglichen Stelle geprueft werden
          //Dazu erst mal sichergehen, dass das Array nicht verlassen werden kann
          else if (i > 1) {
            //Dann wieder auf Hindernisse pruefen
            if (graphics.gridArray[i - 2][this.x + 1] < 0) {
              //Wenn es eins gibt, soll der Stein darauf abgelegt werden
              this.y = i - this.hoehe;
              //Der Stein hoert auf, sich zu bewegen
              this.isMoving = false;
              //Und die Schleife muss nicht weiter durchlaufen
              break;
            }
            //Wird nirgendwo ein Hindernis gefunden, dann tue das
            else {
              //Platziere das Objekt ganz unten
              this.y = graphics.blockRowGrid - this.hoehe;
              //Und das Objekt stoppt die Bewegung
              this.isMoving = false;
            }
          }
        }
        //Wenn der Stein quer gedreht ist
        else if (this.querGedreht) {
          //Wieder erst mal pruefen, ob es ein Hindernis gibt
          if (graphics.gridArray[i][this.x + 2] < 0) {
            //Wenn ja dann wird der Stein direkt darauf platziert
            this.y = i - this.hoehe;
            //bewegt sich nicht weiter
            this.isMoving = false;
            //und die Schleife wird abgebrochen
            break;
          }
          //Wenn dort kein Hindernis war, muss noch an zwei weiteren moeglichen Stellen geprueft werden
          //Dazu erst mal sichergehen, dass das Array nicht verlassen werden kann
          else if (i > 0) {
            //Dann wieder auf Hindernisse pruefen
            if (graphics.gridArray[i - 1][this.x] < 0 || graphics.gridArray[i - 1][this.x + 1] < 0) {
              //Wenn es eins gibt, soll der Stein darauf abgelegt werden
              this.y = i - this.hoehe;
              //Der Stein hoert auf, sich zu bewegen
              this.isMoving = false;
              //Und die Schleife muss nicht weiter durchlaufen
              break;
            }
            //Wird nirgendwo ein Hindernis gefunden, dann tue das
            else {
              //Platziere das Objekt ganz unten
              this.y = graphics.blockRowGrid - this.hoehe;
              //Und das Objekt stoppt die Bewegung
              this.isMoving = false;
            }
          }
        }
        //Wenn der Stein quer ist
        else if (this.quer) {
          //Wieder erst mal pruefen, ob es ein Hindernis gibt
          if (graphics.gridArray[i][this.x] < 0 || graphics.gridArray[i][this.x + 1] < 0 || graphics.gridArray[i][this.x + 2] < 0) {
            //Wenn ja dann wird der Stein direkt darauf platziert
            this.y = i - this.hoehe;
            //bewegt sich nicht weiter
            this.isMoving = false;
            //und die Schleife wird abgebrochen
            break;
          }
          //Wird nirgendwo ein Hindernis gefunden, dann tue das
          else {
            //Platziere das Objekt ganz unten
            this.y = graphics.blockRowGrid - this.hoehe;
            //Und das Objekt stoppt die Bewegung
            this.isMoving = false;
          }
        }
      }
      this.lastMove = false;
    }
  //Funktion fuer das automatische runterfallen
  this.gravity = function() {
    this.yCounter += speed;
    //Wenn der Stein senkrecht ist
    if (this.senkrecht) {
      //Pruefen, ob das Objekt bereits unten angekommen ist
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        //Wenn nein, dann wird geprueft, ob es ein Hindernis gibt
        if (graphics.gridArray[round(this.y + this.hoehe)][this.x] == 0 && graphics.gridArray[round(this.y + this.hoehe)][this.x - 1] == 0) {
          //Ist kein Hindernis im Weg, faellt das Objekt
          this.y += speed;
        }
        //Ist ein Hindernis im Weg, faellt das Objekt nicht weiter
        else {
          //daher wird die Bewegung auf falsch gesetzt
          this.isMoving = false;
        }
      }
    }
    //Wenn der Stein senkrecht gedreht ist
    else if (this.senkrechtGedreht) {
      //Pruefen, ob das Objekt bereits unten angekommen ist
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        //Pruefen, ob es ein Hindernis gibt
        if (graphics.gridArray[round(this.y + this.hoehe)][this.x] == 0 && graphics.gridArray[round(this.y + 1)][this.x + 1] == 0) {
          //Gibt es keines, dann faellt das Objekt weiter
          this.y += speed;
        }
        //Wenn es ein Hindernis gibt
        else {
          //dann faellt das Objekt nicht weiter
          this.isMoving = false;
        }
      }
    }
    //Wenn der Stein quer liegt
    else if (this.quer) {
      //Pruefen, ob das Objekt bereits unten angekommen ist
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        //Pruefen, ob es ein Hindernis gibt
        if (graphics.gridArray[round(this.y + 2)][this.x] == 0 && graphics.gridArray[round(this.y + 2)][this.x + 1] == 0 &&
        graphics.gridArray[round(this.y + 2)][this.x + 2] == 0) {
          //Gibt es keines, dann faellt das Objekt weiter
          this.y += speed;
        }
        //Wenn es ein Hindernis gibt
        else {
          //dann faellt das Objekt nicht weiter
          this.isMoving = false;
        }
      }
    }
    //Wenn das Objekt quer gedreht ist
    else if (this.querGedreht) {
      //Pruefen, ob das Objekt bereits unten angekommen ist
      if (round(this.y) < graphics.blockRowGrid - this.hoehe) {
        //Pruefen, ob es ein Hindernis gibt
        if (graphics.gridArray[round(this.y + 1)][this.x] == 0 && graphics.gridArray[round(this.y + 1)][this.x + 1] == 0 &&
        graphics.gridArray[round(this.y + 2)][this.x + 2] == 0) {
          //Gibt es keines, dann faellt das Objekt weiter
          this.y += speed;
        }
        //Wenn es ein Hindernis gibt
        else {
          //dann faellt das Objekt nicht weiter
          this.isMoving = false;
        }
      }
    }
    if (round(this.yCounter) >= round(this.y + 1)) {
      this.lastMove = false;
    }
  }
  //Funktion zum Bewegen nach rechts
  this.bewegungRechts = function() {
    if (this.moveRightPossible) {
      this.x += 1;
    }
  }
  //Funktion zum Bewegen nach links
  this.bewegungLinks = function() {
    if (this.moveLeftPossible) {
      this.x -= 1;
    }
  }
  //Funktion zum Pruefen, ob ausreichend Platz ist, um das Objekt zu erzeugen
  this.createNewObjectIsPossible = function() {
    //Es werden die Felder ueberprueft, wo das Objekt erzeugt werden wuerde, wenn diese Felder frei sind
    if (!(graphics.gridArray[round(this.y)][this.x] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x] < 0) &&
    !(graphics.gridArray[round(this.y + 2)][this.x] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x - 1] < 0)) {
      //Sind die Felder frei, kann das Objekt erzeugt werden, es wird also true zurueckgegeben
      return true;
    }
    //Sollten die Felder nicht alle frei sein, dann
    else {
      //kann das Objekt nicht erzeugt werden und es wird false zurueckgegeben
      return false;
    }
  }
  //Funktion, die prueft, ob man sich bewegen darf
  this.movementPossible = function() {
    //links
    //Wenn der Stein senkrecht ist
    if (this.senkrecht) {
      //Sicherstellen, dass das Objekt das Feld nicht verlaesst
      if (this.x > 1) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) &&
        !(graphics.gridArray[round(this.y + 2)][this.x - 2] < 0)) {
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
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x - 1] < 0)) {
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
      if (this.x > 0) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x - 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0)) {
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
      if (this.x < graphics.blockColumnGrid - 1) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x + 1] < 0)) {
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
        if (!(graphics.gridArray[round(this.y)][this.x + 2] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 2)][this.x + 1] < 0)) {
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
        if (!(graphics.gridArray[round(this.y)][this.x + 1] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + this.breite] < 0)) {
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
      if (this.x < graphics.blockColumnGrid - this.breite) {
        //Pruefen, ob rechts ausreichend Platz zum bewegen ist
        if (!(graphics.gridArray[round(this.y)][this.x + this.breite] < 0) && !(graphics.gridArray[round(this.y + 1)][this.x + this.breite] < 0)) {
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
