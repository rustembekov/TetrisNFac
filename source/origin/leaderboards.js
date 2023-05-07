var leaderboards;

var anzahlScores = 10;

function showScores(array) {
    document.getElementById('localscores').innerHTML = '<b>Local:</b>';
    var platz = 1;
    for (var i = array.length - 1; i >= 0; i--) {
        var platzierung = platz.toString();
        createP(platzierung + '.' + ' ' + array[i]).parent('localscores');
        platz++;
    }
}

function storeScore() {
    addScore();
    if (leaderboards.length > 0) {
        bubbleSort(leaderboards);

    }
}

function HolEintraege() {
    var eintraegeArray = localStorage.getItem('eintraegeArray');
    if (!eintraegeArray) {
        eintraegeArray = ['0', '0', '0', '0', '0', '0', '0', '0', '0'];
        eintraegeArray.push(graphics.score.toString());
        localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
    } else {
        eintraegeArray = JSON.parse(eintraegeArray);
    }

    return bubbleSort(eintraegeArray);
}

function addScore() {
    var eintraegeArray = HolEintraege();
    var value = graphics.score.toString();
    if (eintraegeArray.length < anzahlScores) {
        eintraegeArray.push(value);
        localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
    } else {
        if (graphics.score > eintraegeArray[eintraegeArray.length - 1]) {
            eintraegeArray.shift();
            eintraegeArray.push(value);
            localStorage.setItem('eintraegeArray', JSON.stringify(eintraegeArray));
        }
    }
    leaderboards = bubbleSort(eintraegeArray);
}

function bubbleSort(array) {
    for (var k = 0; k < array.length; k++) {
        array[k] = parseInt(array[k]);
    }
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    for (var j = 0; j < array.length; j++) {
        array[j] = array[j].toString();
    }
    return array;
}

function clearStorage() {
    localStorage.clear();
}

function realTimeScore() {
    var value = graphics.score.toString();

    if (leaderboards.length < anzahlScores) {

        leaderboards[0] = value;
        localStorage.setItem('eintraegeArray', JSON.stringify(leaderboards));
    } else {
        if (graphics.score > leaderboards[0]) {
            leaderboards[0] = value;
            localStorage.setItem('eintraegeArray', JSON.stringify(leaderboards));
        }
    }
}
