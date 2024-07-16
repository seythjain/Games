var width = 4;
var height = 4;
var score = 0;
var foundCell = true;
var valsBefore =
    [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

var valsAfter =
    [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];

console.log(valsBefore)

addNum();
addNum();
fillInGrid();


// create all of the grid elements

// for (let i = 0; i < height; i++) {
//     for (let x = 0; x < width; x++) {
//         let div = document.createElement("div");
//         document.getElementById("grid-container").appendChild(div);
//         div.setAttribute('id', `${i},${x}`);
//         div.setAttribute('class', 'grid-item')
//     }
// }



function upDownLeftRight(event) {
    var key = event.key
    if (key == 'w' || key == 'W' || key == 'ArrowUp') {
        up()
    } else if (key == 'a' || key == 'A'|| key == 'ArrowLeft') {
        left()
    } else if (key == 's' || key == 'S'|| key == 'ArrowDown') {
        down()
    } else if (key == 'd' || key == 'D'|| key == 'ArrowRight') {
        right()
    }
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function up() {
    // i = height x = width

    for (let i = 0; i < height; i++) {
        for (let x = 0; x < width; x++) {
            if (i != height - 1 && (valsBefore[i][x] == valsBefore[i + 1][x])) {
                valsAfter[i][x] = valsBefore[i][x] + valsBefore[i + 1][x];
                score += valsAfter[i][x];
                valsBefore[i + 1][x] = 0;
            } else {
                valsAfter[i][x] = valsBefore[i][x]
            }

        }
    }
    // i = height x = width
    // i = height x = width
    // i = height x = width
    // i = height x = width





    for (let x = 0; x < width; x++) {
        let pos_0 = -1

        for (let i = 0; i < height; i++) {
            if (pos_0 == -1 && valsAfter[i][x] == 0) {
                pos_0 = i
            }
            if (pos_0 != -1 && valsAfter[i][x] != 0) {
                valsAfter[pos_0][x] = valsAfter[i][x]
                valsAfter[i][x] = 0;
                pos_0 += 1
            }
        }
    }
    addNum()
    console.log(valsBefore)
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function down() {
    // i = height x = width

    valsAfter[0] = valsBefore[0]

    for (let i = height - 1; i > 0; i--) {
        for (let x = 0; x < width; x++) {
            if (valsBefore[i][x] == valsBefore[i - 1][x]) {
                valsAfter[i][x] = valsBefore[i][x] + valsBefore[i - 1][x];
                score += valsAfter[i][x];
                valsBefore[i - 1][x] = 0;
            } else {
                valsAfter[i][x] = valsBefore[i][x]
            }
        }
    }
    // i = height x = width
    // i = height x = width
    // i = height x = width
    // i = height x = width



    for (let x = 0; x < width; x++) {
        let pos_0 = -1

        for (let i = height - 1; i >= 0; i--) {
            if (pos_0 == -1 && valsAfter[i][x] == 0) {
                pos_0 = i
            }
            if (pos_0 != -1 && valsAfter[i][x] != 0) {
                valsAfter[pos_0][x] = valsAfter[i][x]
                valsAfter[i][x] = 0;
                pos_0 -= 1
            }
        }
    }
    addNum()
    console.log(valsBefore)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function left() {
    // i = height x = width
    let r = 0


    for (let i = 0; i < height; i++) {
        for (let x = 0; x < width; x++) {
            if (x != width - 1 && (valsBefore[i][x] == valsBefore[i][x + 1])) {
                valsAfter[i][x] = valsBefore[i][x] + valsBefore[i][x + 1];
                score += valsAfter[i][x];
                valsBefore[i][x + 1] = 0;
            } else {
                valsAfter[i][x] = valsBefore[i][x]
            }

        }
    }
    // i = height x = width
    // i = height x = width
    // i = height x = width
    // i = height x = width





    for (let i = 0; i < height; i++) {
        for (let x = 1; x < width; x++) {
            for (r = 1; r < width; r++) {
                if (valsAfter[i][x - r] == 0) {
                    valsAfter[i][x - r] = valsAfter[i][x - (r - 1)]
                    valsAfter[i][x - (r - 1)] = 0;
                } else if (valsAfter[i][x] == 0) {
                    r = 0;
                    break;
                } else {
                    r = 0
                    break;
                }
            }
        }
    }

    addNum()
    console.log(valsBefore)
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function right() {
    // i = height x = width
    let r = 0


    for (let i = 0; i < height; i++) {
        for (let x = width - 1; x > 0; x--) {
            if (x != 0 && (valsBefore[i][x] == valsBefore[i][x - 1])) {
                valsAfter[i][x] = valsBefore[i][x] + valsBefore[i][x - 1];
                score += valsAfter[i][x];
                valsBefore[i][x - 1] = 0;
                valsAfter[i][x - 1] = 0;
            } else {
                valsAfter[i][x] = valsBefore[i][x]
            }
        }
    }
    // i = height x = width
    // i = height x = width
    // i = height x = width
    // i = height x = width



    for (let i = 0; i < height; i++) {
        for (let x = width - 2; x >= 0; x--) {
            for (r = 1; r < width; r++) {
                if (valsAfter[i][x + r] == 0) {
                    valsAfter[i][x + r] = valsAfter[i][x + (r - 1)]
                    valsAfter[i][x + (r - 1)] = 0;
                } else if (valsAfter[i][x] == 0) {
                    r = 0;
                    break;
                } else {
                    r = 0
                    break;
                }
                fillInGrid(i,x)
            }
        }
    }
    addNum()
    console.log(valsBefore)
}

function fillInGrid(iGiven = false, xGiven = false) {
    if (iGiven != false && xGiven != false) {
        setTimeout(() => {
            if (cellGiven != 0) {
            document.getElementById(`${iGiven},${xGiven}`).innerHTML = valsAfter[iGiven][xGiven];
            document.getElementById(`${iGiven},${xGiven}`).style.backgroundColor = 'white';
        }
    }, 50);
    } else {
        document.getElementById('score').innerHTML = score;
        for (let i = 0; i < height; i++) {
            for (let x = 0; x < width; x++) {
                if (valsAfter[i][x] != 0) {
                    document.getElementById(`${i},${x}`).innerHTML = valsAfter[i][x];
                } else {
                    document.getElementById(`${i},${x}`).innerText = '  ';
                }
                // Why Is this not working???????????????????????????????????????????????????????????????????
                if (document.getElementById(`${i},${x}`) == '2') {
                    document.getElementById(`${i},${x}`).style.backgroundColor = 'white'; //rgb(63, 59, 59);
                }
            }
        }
    }

    // if (valsBefore == valsAfter) {
    //     alert('You Lose')
    //     return;
    // } else {

    //     valsBefore = valsAfter;
    // }
}
function addNum() {
    valsBefore = valsAfter;
    var chosenRndm = Math.floor(Math.random() * 100);
    var chosen = 2;

    if (chosenRndm > 98) {
        chosen = 4
    }

    var freeCount = 0;

    for (let i = 0; i < height; i++) {
        for (let x = 0; x < width; x++) {
            if (valsAfter[i][x] == 0) {
                freeCount += 1
            }
        }
    }

    var rndmFreeCount = Math.floor(Math.random() * freeCount) + 1;

    for (let i = 0; i < height; i++) {
        for (let x = 0; x < width; x++) {
            if (valsAfter[i][x] == 0) {
                rndmFreeCount -= 1
                if (rndmFreeCount == 0) {
                    valsAfter[i][x] = chosen;
                    break;
                }
            }
        }
    }

    fillInGrid()
}
