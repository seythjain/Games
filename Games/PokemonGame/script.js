var oppHP = 100;
var oppInitHp = 100;
var yourInitHp = 100;
var yourHP = 100;
var mode = 0;
var randomYN = false;
var potions = 3;
var pointsOn = false;
var amountOfPoints = 0;
var power = 0;
var pp = 0;


document.getElementById('easy').addEventListener("click", function () {
    document.getElementById("lvl").innerHTML = "Difficulty: Easy";
    mode = 30;
    potions = 3;
    oppHP = 100;
    oppInitHp = 100;
    randomYN = false;
});

document.getElementById('medium').addEventListener("click", function () {
    document.getElementById("lvl").innerHTML = "Difficulty: Medium";
    mode = 25;
    potions = 4;
    oppHP = 110;
    oppInitHp = 110;
    randomYN = false;
});

document.getElementById('hard').addEventListener("click", function () {
    document.getElementById("lvl").innerHTML = "Difficulty: Hard";
    mode = 20;
    potions = 5;
    oppHP = 120;
    oppInitHp = 120;
    randomYN = false;
});

document.getElementById('xtreme').addEventListener("click", function () {
    document.getElementById("lvl").innerHTML = "Difficulty: X-treme";
    mode = 18;
    potions = 6;
    oppHP = 135;
    oppInitHp = 135;
    randomYN = false;
});

document.getElementById('random').addEventListener('click', function () {
    document.getElementById("lvl").innerHTML = "Difficulty: Random";
    function get_random(list) {
        return list[Math.floor((Math.random() * list.length))];
    }
    potions = 4;
    mode = get_random([20, 25, 30])
    if (mode == 20) {
        oppHP = 120;
    } else if (mode == 25) {
        oppHP = 110;
    } else {
        oppHP = 100;
    }

    oppInitHp = oppHP
    randomYN = true;
});

document.getElementById('tournement').addEventListener('click', function () {
    document.getElementById("lvl").innerHTML = "Tournement";

    if (amountOfPoints == 0) {
        mode = 25;
        oppHP = 100;
        potions = 4;
    } else if (amountOfPoints == 1) {
        mode = 20;
        oppHP = 110;
        potions = 5;
    } else if (amountOfPoints == 2) {
        mode = 20;
        oppHP = 130;
        potions = 6;
    }

    oppInitHp = oppHP;
    pointsOn = true;

});

/////////////////////////////////////////////////////////////////////////////////////

function battleScreen(pokemon) {
    document.getElementById('bigPoke').style.display = 'block';
    document.getElementById('bigPoke').src = pokemon + 'HomePage.gif';
    document.getElementById('vs').style.display = 'block';
}

function opponentPoke() {
    //for tournement
    // if (pointsOn == true & amountOfPoints == 2) {
    //     document.getElementById('opponentCharacter').src = 'charizardHomePage.gif'
    //     document.getElementById('opponentCharacter').style.display = 'block';
    //     document.getElementById('ready').style.display = 'block';   
    // } else {
    var randomNumberGenerator = Math.floor(Math.random() * 4) + 1;
    // we're getting of random pokemon
    var rngSource = document.getElementById(randomNumberGenerator).src;
    // displays the pokemon on screen
    document.getElementById('opponentCharacter').src = rngSource;
    document.getElementById('opponentCharacter').style.display = 'block';
    document.getElementById('ready').style.display = 'block';
    //   }
}



function battleFieldSetup() {

    if (mode == 0) {
        alert('You must choose a difficulty level');
        return;
    }

    var pokemon = document.getElementById('bigPoke').src;
    var yourPoke = document.getElementById('bigPoke');
    var opponentPoke = document.getElementById('opponentCharacter');


    document.getElementById('chooseCharacter').innerHTML = 'Battle!';
    document.getElementById('container').style.display = 'none';
    document.getElementById('bttlfield').style.display = 'block';
    document.getElementById('vs').style.display = 'none';
    document.getElementById('ready').style.display = 'none';
    document.getElementById('yourHP').innerHTML = 'Your Hp: ' + yourHP;
    document.getElementById('oppHP').innerHTML = 'Opponent Hp: ' + oppHP;
    document.getElementById('yourHP').style.display = 'block';
    document.getElementById('oppHP').style.display = 'block';
    document.getElementById('oppBar').style.display = 'block';
    document.getElementById('yourBar').style.display = 'block';
    document.getElementById('items').style.display = 'block';
    document.getElementById('numOfPotions').innerHTML = potions;
    yourPoke.style.marginTop = '25%';
    yourPoke.style.marginLeft = '3%';
    opponentPoke.style.width = '300px';
    opponentPoke.style.height = '300px';
    opponentPoke.style.marginTop = '-40%';
    opponentPoke.style.marginLeft = '49%';

    if (pokemon.includes('pikachuHomePage.gif') == true) {
        document.getElementById('attacks').style.display = 'block';
        document.getElementById('multimove').innerHTML = 'Thunderbolt';
        document.getElementById('multimove2').innerHTML = 'Electro Ball';
        document.getElementById('multimove3').innerHTML = 'Quick Attack';
        document.getElementById('multimove4').innerHTML = 'Iron Tail';
    } else if (pokemon.includes('bulbasaurHomePage.gif') == true) {
        document.getElementById('attacks').style.display = 'block';
        document.getElementById('multimove').innerHTML = 'Vine Whip';
        document.getElementById('multimove2').innerHTML = 'Magical Leaf';
        document.getElementById('multimove3').innerHTML = 'Solar Beam';
        document.getElementById('multimove4').innerHTML = 'Power Whip';
    } else if (pokemon.includes('squirtleHomePage.gif') == true) {
        document.getElementById('attacks').style.display = 'block';
        document.getElementById('multimove').innerHTML = 'Water Gun';
        document.getElementById('multimove2').innerHTML = 'Aqua tail';
        document.getElementById('multimove3').innerHTML = 'Surf';
        document.getElementById('multimove4').innerHTML = 'Gyro Ball';
    } else {
        document.getElementById('attacks').style.display = 'block';
        document.getElementById('multimove').innerHTML = 'Ember';
        document.getElementById('multimove2').innerHTML = 'Flame Wheel';
        document.getElementById('multimove3').innerHTML = 'Flamethrower';
        document.getElementById('multimove4').innerHTML = 'Scratch';
    }
}

////////////////////////////////////////////////////////////////////////////////////
function usePotion() {

    if (pointsOn == true && amountOfPoints == 2) {
        useSuperPotion()
    }


    if (potions <= 0) {
        document.getElementById('potion').disabled = true;
        return;
    } else {
        document.getElementById('potion').disabled = false;
    }
    potions--;
    document.getElementById('numOfPotions').innerHTML = potions;
    var oldHp = yourHP;
    for (let i = 0; i < 15; i++) {
        if (yourHP == 100) {
            break
        } else {
            yourHP += 1
            document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
            document.getElementById('yourProgress').style.width = yourHP + '%';

        }

    }


    var pokemon = document.getElementById('bigPoke').src;

    if (pokemon.includes('pikachuHomePage.gif') == true) {
        pokemon = 'Pikachu'
    } else if (pokemon.includes('bulbasaurHomePage.gif') == true) {
        pokemon = 'Bulbasaur'
    } else if (pokemon.includes('squirtleHomePage.gif') == true) {
        pokemon = 'Squirtle'
    } else {
        pokemon = 'Charmander'
    }

    var pointsHealed = yourHP - oldHp
    document.getElementById('textBoxBtm').style.display = 'block';
    document.getElementById('commentator').innerHTML = 'You used a potion. ' + pokemon + ' was healed by ' + pointsHealed + ' points.';
    setTimeout(() => {
        document.getElementById('textBoxBtm').style.display = 'none';
    }, 2000);
    if (potions == 0) {
        document.getElementById('potion').disabled = true;
    }
    document.getElementById('multimove').disabled = true;
    document.getElementById('multimove2').disabled = true;
    document.getElementById('multimove3').disabled = true;
    document.getElementById('multimove4').disabled = true;
    document.getElementById('potion').disabled = true;
    setTimeout(() => {
        document.getElementById('multimove').disabled = false;
        document.getElementById('multimove2').disabled = false;
        document.getElementById('multimove3').disabled = false;
        document.getElementById('multimove4').disabled = false;
        if ((potions <= 0) == false) {
            document.getElementById('potion').disabled = false;
        } else {
            document.getElementById('potion').disabled = true;
        }
    }, 3000);

    opponentAttack();


}

////////////////////////////////////////////////////////////////////////////


function pullMove(btn) {
    if (btn == 'multimove') {
        var i = document.getElementById('multimove').innerText;
        battle(i)
    } else if (btn == 'multimove2') {
        var i = document.getElementById('multimove2').innerText;
        battle(i)
    } else if (btn == 'multimove3') {
        var i = document.getElementById('multimove3').innerText;
        battle(i)
    } else if (btn == 'multimove4') {
        var i = document.getElementById('multimove4').innerText;
        battle(i)
    }
}

//////////////////////////////////////////////////////////////////////////////


function battle(move) {
    var moves = ['Thunderbolt', 'Electro Ball', 'Quick Attack', 'Iron Tail', 'Vine Whip', 'Magical Leaf', 'Solar Beam', 'Power Whip', 'Water Gun', 'Aqua Tail', 'Surf', 'Gyro Ball', 'Ember', 'Flame Wheel', 'Flamethrower', 'Scratch'];
    var movePower = [25, 20, 15, 30, 25, 20, 15, 30, 25, 20, 15, 30, 25, 20, 15, 30];


    var pokemon = document.getElementById('bigPoke').src;

    if (pokemon.includes('pikachuHomePage.gif') == true || pokemon.includes('pikachuAttack.gif') == true) {
        // your attack        

        // for (let i = 0; i < moves.length; i++) {
        //     if (moves[i] == move) {
        //         power = movePower[i];
        //     }

        // }



        document.getElementById('bigPoke').src = 'pikachuAttack.gif';
        var random = power;
        var beforeHp = oppHP;
        oppHP -= random;
        var damage = beforeHp - oppHP;
        document.getElementById('oppHP').innerHTML = "Opponent Hp: " + oppHP;
        setTimeout(() => { document.getElementById('bigPoke').src = 'pikachuHomePage.gif'; }, 1000);
        document.getElementById('oppProgress').style.width = 100 * oppHP / oppInitHp + '%';
        document.getElementById('textBoxBtm').style.display = 'block';
        document.getElementById('commentator').innerHTML = 'Pikachu used ' + move;
        setTimeout(() => { document.getElementById('commentator').innerHTML = 'Pikachu did ' + damage + ' damage.'; }, 1000);
        document.getElementById('multimove').disabled = true;
        document.getElementById('multimove2').disabled = true;
        document.getElementById('multimove3').disabled = true;
        document.getElementById('multimove4').disabled = true;
        document.getElementById('potion').disabled = true;
        setTimeout(() => {
            document.getElementById('multimove').disabled = false;
            document.getElementById('multimove2').disabled = false;
            document.getElementById('multimove3').disabled = false;
            document.getElementById('multimove4').disabled = false;
            if ((potions <= 0) == false) {
                document.getElementById('potion').disabled = false;
            } else {
                document.getElementById('potion').disabled = true;
            }
        }, 3000);
        setTimeout(() => {
        if (oppHP <= 0) {
            document.getElementById('wholePg').style.display = 'none';
            document.getElementById('chooseCharacter').style.display = 'none';
            document.getElementById('victory').style.display = 'block';
            if (randomYN == true) {

                if (mode == 30) {
                    mode = 'Easy'
                } else if (mode == 25) {
                    mode = 'Medium'
                } else {
                    mode = 'Hard'
                }
                document.getElementById('victory').innerHTML = 'You Win, your mode was ' + mode;
            } else {
                if (pointsOn == true) {
                    amountOfPoints++;
                    document.getElementById('victory').innerHTML = 'You Win! You have ' + amountOfPoints + '/3 points.'
                    pointsOn = true;
                    reset();
                } else if (amountOfPoints == 3) {
                    document.getElementById('victory').innerHTML = 'You Win! You have all three points. You have won the tournement!'
                } else {
                    document.getElementById('victory').innerHTML = 'You Win!'
                }
            }
        } else {
            opponentAttack()
        }
    }, 1000);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    } else if (pokemon.includes('bulbasaurHomePage.gif') == true || pokemon.includes('bulbasaurAttack.gif') == true) {
        // your attack    
        
        for (let i = 0; i < moves.length; i++) {
            if (moves[i] == move) {
                power = movePower[i];
            }

        }


        document.getElementById('bigPoke').src = 'bulbasaurAttack.gif';
        var random = power;
        var beforeHp = oppHP;
        oppHP -= random;
        var damage = beforeHp - oppHP;
        document.getElementById('oppHP').innerHTML = "Opponent Hp: " + oppHP;
        setTimeout(() => { document.getElementById('bigPoke').src = 'bulbasaurHomePage.gif'; }, 1000);
        document.getElementById('oppProgress').style.width = 100 * oppHP / oppInitHp + '%';
        document.getElementById('textBoxBtm').style.display = 'block';
        document.getElementById('commentator').innerHTML = 'Bulbasaur used ' + move;
        document.getElementById('multimove').disabled = true;
        document.getElementById('multimove2').disabled = true;
        document.getElementById('multimove3').disabled = true;
        document.getElementById('multimove4').disabled = true;
        document.getElementById('potion').disabled = true;
        setTimeout(() => {
            document.getElementById('multimove').disabled = false;
            document.getElementById('multimove2').disabled = false;
            document.getElementById('multimove3').disabled = false;
            document.getElementById('multimove4').disabled = false;
            if ((potions <= 0) == false) {
                document.getElementById('potion').disabled = false;
            } else {
                document.getElementById('potion').disabled = true;
            }
        }, 3000);

        setTimeout(() => {
            if (oppHP <= 0) {
                document.getElementById('wholePg').style.display = 'none';
                document.getElementById('chooseCharacter').style.display = 'none';
                document.getElementById('textBoxBtm').style.display = 'block';
                if (randomYN == true) {
    
                    if (mode == 30) {
                        mode = 'Easy'
                    } else if (mode == 25) {
                        mode = 'Medium'
                    } else {
                        mode = 'Hard'
                    }
                    document.getElementById('commentator').innerHTML = 'You Win, your mode was ' + mode;
                } else {
                    if (pointsOn == true) {
                        amountOfPoints++;
                        document.getElementById('commentator').innerHTML = 'You Win! You have ' + amountOfPoints + '/3 points.'
                        pointsOn = true;
                        reset();
                    } else if (amountOfPoints == 3) {
                        document.getElementById('commentator').innerHTML = 'You Win! You have all three points. You have won the tournement!'
                    } else {
                        document.getElementById('commentator').innerHTML = 'You Win!'
                    }
                }
            } else {
                opponentAttack()
            }
        }, 1000);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           
    } else if (pokemon.includes('squirtleHomePage.gif') == true || pokemon.includes('squirtleAttack.gif') == true) {
        // your attack        

        for (let i = 0; i < moves.length; i++) {
            if (moves[i] == move) {
                power = movePower[i];
            }

        }


        document.getElementById('bigPoke').src = 'squirtleAttack.gif';
        var random = power;
        var beforeHp = oppHP;
        oppHP -= random;
        var damage = beforeHp - oppHP;
        document.getElementById('oppHP').innerHTML = "Opponent Hp: " + oppHP;
        setTimeout(() => { document.getElementById('bigPoke').src = 'squirtleHomePage.gif'; }, 1000);
        document.getElementById('oppProgress').style.width = 100 * oppHP / oppInitHp + '%';
        document.getElementById('textBoxBtm').style.display = 'block';
        document.getElementById('commentator').innerHTML = 'Squirtle used ' + move;
        document.getElementById('multimove').disabled = true;
        document.getElementById('multimove2').disabled = true;
        document.getElementById('multimove3').disabled = true;
        document.getElementById('multimove4').disabled = true;
        document.getElementById('potion').disabled = true;
        setTimeout(() => {
            document.getElementById('multimove').disabled = false;
            document.getElementById('multimove2').disabled = false;
            document.getElementById('multimove3').disabled = false;
            document.getElementById('multimove4').disabled = false;
            if ((potions <= 0) == false) {
                document.getElementById('potion').disabled = false;
            } else {
                document.getElementById('potion').disabled = true;
            }
        }, 3000);

        setTimeout(() => {
            if (oppHP <= 0) {
                document.getElementById('wholePg').style.display = 'none';
                document.getElementById('chooseCharacter').style.display = 'none';
                document.getElementById('textBoxBtm').style.display = 'block';
                if (randomYN == true) {
    
                    if (mode == 30) {
                        mode = 'Easy'
                    } else if (mode == 25) {
                        mode = 'Medium'
                    } else {
                        mode = 'Hard'
                    }
                    document.getElementById('commentator').innerHTML = 'You Win, your mode was ' + mode;
                } else {
                    if (pointsOn == true) {
                        amountOfPoints++;
                        document.getElementById('commentator').innerHTML = 'You Win! You have ' + amountOfPoints + '/3 points.'
                        pointsOn = true;
                        reset();
                    } else if (amountOfPoints == 3) {
                        document.getElementById('commentator').innerHTML = 'You Win! You have all three points. You have won the tournement!'
                    } else {
                        document.getElementById('commentator').innerHTML = 'You Win!'
                    }
                }
            } else {
                opponentAttack()
            }
        }, 1000);
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           
    } else if (pokemon.includes('charmanderHomePage.gif') == true || pokemon.includes('yourCharmanderAttack.gif') == true) {
        // your attack  
        
        for (let i = 0; i < moves.length; i++) {
            if (moves[i] == move) {
                power = movePower[i];
            }

        }


        document.getElementById('bigPoke').src = 'yourCharmanderAttack.gif';
        var random = power;
        var beforeHp = oppHP;
        oppHP -= random;
        var damage = beforeHp - oppHP;
        document.getElementById('oppHP').innerHTML = "Opponent Hp: " + oppHP;
        setTimeout(() => { document.getElementById('bigPoke').src = 'charmanderHomePage.gif'; }, 1000);
        document.getElementById('oppProgress').style.width = 100 * oppHP / oppInitHp + '%';
        document.getElementById('textBoxBtm').style.display = 'block';
        document.getElementById('commentator').innerHTML = 'Charmander used ' + move;
        document.getElementById('multimove').disabled = true;
        document.getElementById('multimove2').disabled = true;
        document.getElementById('multimove3').disabled = true;
        document.getElementById('multimove4').disabled = true;
        document.getElementById('potion').disabled = true;
        setTimeout(() => {
            document.getElementById('multimove').disabled = false;
            document.getElementById('multimove2').disabled = false;
            document.getElementById('multimove3').disabled = false;
            document.getElementById('multimove4').disabled = false;
            if ((potions <= 0) == false) {
                document.getElementById('potion').disabled = false;
            } else {
                document.getElementById('potion').disabled = true;
            }
        }, 3000);
        
        setTimeout(() => {
            if (oppHP <= 0) {
                document.getElementById('wholePg').style.display = 'none';
                document.getElementById('chooseCharacter').style.display = 'none';
                document.getElementById('textBoxBtm').style.display = 'block';
                if (randomYN == true) {
    
                    if (mode == 30) {
                        mode = 'Easy'
                    } else if (mode == 25) {
                        mode = 'Medium'
                    } else {
                        mode = 'Hard'
                    }
                    document.getElementById('commentator').innerHTML = 'You Win, your mode was ' + mode;
                } else {
                    if (pointsOn == true) {
                        amountOfPoints++;
                        document.getElementById('commentator').innerHTML = 'You Win! You have ' + amountOfPoints + '/3 points.'
                        pointsOn = true;
                        reset();
                    } else if (amountOfPoints == 3) {
                        document.getElementById('commentator').innerHTML = 'You Win! You have all three points. You have won the tournement!'
                    } else {
                        document.getElementById('commentator').innerHTML = 'You Win!'
                    }
                }
            } else {
                opponentAttack()
            }
        }, 1000);

        /********************************************************************************************************************************************************************************************************/
    }


}



function opponentAttack() {
    var randomMove = Math.floor(Math.random() * (4 - 1) + 1);
    var oppPoke = document.getElementById('opponentCharacter').src;

    setTimeout(() => {


        if (amountOfPoints == 2) {

            document.getElementById('opponentCharacter').src = "oppCharizardAttack.gif";
            var random = Math.floor(Math.random() * 15) + 10;
            yourHP -= random;
            document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
            document.getElementById('yourProgress').style.width = yourHP + '%';
            var charMovesArray = ['Flamethrower', 'Flare Blitz', 'Fire Spin', 'Heat Wave']
            var charsMove = charMovesArray[randomMove];
            document.getElementById('textBoxBtm').style.display = 'block';
            document.getElementById('commentator').innerHTML = 'Charizard used ' + charsMove;
            setTimeout(() => { document.getElementById('textBoxBtm').style.display = 'none' }, 3000);

            setTimeout(() => { document.getElementById('opponentCharacter').src = 'charizardHomePage.gif'; }, 1000);
        } else {

            // opponent attack        
            if (oppPoke.includes('pikachuHomePage.gif') == true || oppPoke.includes('oppPikaAttack.gif') == true) {
                document.getElementById('opponentCharacter').src = "oppPikaAttack.gif";
                var random = Math.floor(Math.random() * 20) + 1;
                yourHP -= random;
                document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
                document.getElementById('yourProgress').style.width = yourHP + '%';
                var pikaMovesArray = ['Electro Ball', 'Thunderbolt', 'Quick Attack', 'Iron Tail']
                var pikasMove = pikaMovesArray[randomMove];
                document.getElementById('textBoxBtm').style.display = 'block';
                document.getElementById('commentator').innerHTML = 'Pikachu used ' + pikasMove;
                setTimeout(() => { document.getElementById('textBoxBtm').style.display = 'none' }, 3000);


                setTimeout(() => { document.getElementById('opponentCharacter').src = 'pikachuHomePage.gif'; }, 1000);

            } else if (oppPoke.includes('bulbasaurHomePage.gif') == true || oppPoke.includes('bulbasaurOppAttack.gif') == true) {
                document.getElementById('opponentCharacter').src = "bulbasaurOppAttack.gif";
                var random = Math.floor(Math.random() * 20) + 1;
                yourHP -= random;
                document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
                document.getElementById('yourProgress').style.width = yourHP + '%';
                var bulbMovesArray = ['Vine Whip', 'Power Whip', 'Magical Leaf', 'Solar Beam']
                var bulbasMove = bulbMovesArray[randomMove];
                document.getElementById('textBoxBtm').style.display = 'block';
                document.getElementById('commentator').innerHTML = 'Bulbasaur used ' + bulbasMove;
                setTimeout(() => { document.getElementById('textBoxBtm').style.display = 'none' }, 3000);

                setTimeout(() => { document.getElementById('opponentCharacter').src = 'bulbasaurHomePage.gif'; }, 1000);

            } else if (oppPoke.includes('squirtleHomePage.gif') == true || oppPoke.includes('squirtleAttack.gif') == true) {
                document.getElementById('opponentCharacter').src = "squirtleAttack.gif";
                var random = Math.floor(Math.random() * 20) + 1;
                yourHP -= random;
                document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
                document.getElementById('yourProgress').style.width = yourHP + '%';
                var squirtMovesArray = ['Aqua Tail', 'Gyro Ball', 'Water Gun', 'Surf']
                var squirtsMove = squirtMovesArray[randomMove];
                document.getElementById('textBoxBtm').style.display = 'block';
                document.getElementById('commentator').innerHTML = 'Squirtle used ' + squirtsMove;
                setTimeout(() => { document.getElementById('textBoxBtm').style.display = 'none' }, 3000);

                setTimeout(() => { document.getElementById('opponentCharacter').src = 'squirtleHomePage.gif'; }, 1000);

            } else if (oppPoke.includes('charmanderHomePage.gif') == true || oppPoke.includes('charmanderAttack.gif') == true) {
                document.getElementById('opponentCharacter').src = "charmanderAttack.gif";
                var random = Math.floor(Math.random() * 20) + 1;
                yourHP -= random;
                document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
                document.getElementById('yourProgress').style.width = yourHP + '%';
                var charMovesArray = ['Ember', 'Flamethrower', 'Scratch', 'Flame Wheel']
                var charsMove = charMovesArray[randomMove];
                document.getElementById('textBoxBtm').style.display = 'block';
                document.getElementById('commentator').innerHTML = 'Charmander used ' + charsMove;
                setTimeout(() => { document.getElementById('textBoxBtm').style.display = 'none' }, 3000);
                setTimeout(() => { document.getElementById('opponentCharacter').src = 'charmanderHomePage.gif'; }, 1000);

            }
        }

        if (yourHP <= 0) {
            document.getElementById('wholePg').style.display = 'none';
            document.getElementById('chooseCharacter').style.display = 'none';
            document.getElementById('textBoxBtm').style.display = 'block';
            document.getElementById('commentator').innerHTML = 'You Lose';
        }

        document.getElementById('attacks').style.display = 'block';
    }, 2000);
}


function reset() {
    console.log('round ' + (amountOfPoints + 1))

    setTimeout(() => {

        //for tournement
        if (pointsOn == true & amountOfPoints == 2) {
            document.getElementById('opponentCharacter').src = 'charizardHomePage.gif'
            document.getElementById('opponentCharacter').style.display = 'block';
            document.getElementById('ready').style.display = 'block';
        } else {
            var randomNumberGenerator = Math.floor(Math.random() * 4) + 1;
            // we're getting of random pokemon
            var rngSource = document.getElementById(randomNumberGenerator).src;
            // displays the pokemon on screen
            document.getElementById('opponentCharacter').src = rngSource;
            document.getElementById('opponentCharacter').style.display = 'block';
            document.getElementById('ready').style.display = 'block';
        }

        yourHP = 100;
        document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
        document.getElementById('yourProgress').style.width = 100 * yourHP / yourInitHp + '%';

        if (amountOfPoints == 1) {
            oppHP = 110;
            oppInitHp = oppHP;
            mode = 20;
            potions = 5;
        } else if (amountOfPoints == 2) {
            oppHP = 130;
            oppInitHp = oppHP;
            mode = 20;
            potions = 3;
            yourHP = 115;
            yourInitHp = 115;
        }
        document.getElementById('oppHP').innerHTML = "Opponent Hp: " + oppHP;
        document.getElementById('oppProgress').style.width = 100 * oppHP / oppInitHp + '%';


        var pokemon = document.getElementById('bigPoke').src;
        var yourPoke = document.getElementById('bigPoke');
        var opponentPoke = document.getElementById('opponentCharacter');

        document.getElementById('wholePg').style.display = 'block';
        document.getElementById('chooseCharacter').style.display = 'block';
        document.getElementById('yourHP').style.display = 'block';
        document.getElementById('oppHP').style.display = 'block';
        document.getElementById('bttlfield').style.display = 'block';
        document.getElementById('vs').style.display = 'none';
        document.getElementById('ready').style.display = 'none';
        document.getElementById('yourHP').innerHTML = 'Your Hp: ' + yourHP;
        document.getElementById('oppHP').innerHTML = 'Opponent Hp: ' + oppHP;
        document.getElementById('yourHP').style.display = 'block';
        document.getElementById('oppHP').style.display = 'block';
        document.getElementById('oppBar').style.display = 'block';
        document.getElementById('yourBar').style.display = 'block';
        document.getElementById('items').style.display = 'block';
        document.getElementById('numOfPotions').innerHTML = potions;
        yourPoke.style.marginTop = '25%';
        yourPoke.style.marginLeft = '3%';
        opponentPoke.style.width = '300px';
        opponentPoke.style.height = '300px';
        opponentPoke.style.marginTop = '-40%';
        opponentPoke.style.marginLeft = '49%';


        if (pokemon.includes('pikachuHomePage.gif') == true) {
            document.getElementById('attacks').style.display = 'block';
            document.getElementById('multimove').innerHTML = 'Thunderbolt';
            document.getElementById('multimove2').innerHTML = 'Electro Ball';
            document.getElementById('multimove3').innerHTML = 'Quick Attack';
            document.getElementById('multimove4').innerHTML = 'Iron Tail';
        } else if (pokemon.includes('bulbasaurHomePage.gif') == true) {
            document.getElementById('attacks').style.display = 'block';
            document.getElementById('multimove').innerHTML = 'Vine Whip';
            document.getElementById('multimove2').innerHTML = 'Magical Leaf';
            document.getElementById('multimove3').innerHTML = 'Solar Beam';
            document.getElementById('multimove4').innerHTML = 'Power Whip';
        } else if (pokemon.includes('squirtleHomePage.gif') == true) {
            document.getElementById('attacks').style.display = 'block';
            document.getElementById('multimove').innerHTML = 'Water Gun';
            document.getElementById('multimove2').innerHTML = 'Aqua tail';
            document.getElementById('multimove3').innerHTML = 'Surf';
            document.getElementById('multimove4').innerHTML = 'Gyro Ball';
        } else {
            document.getElementById('attacks').style.display = 'block';
            document.getElementById('multimove').innerHTML = 'Ember';
            document.getElementById('multimove2').innerHTML = 'Flame Wheel';
            document.getElementById('multimove3').innerHTML = 'Flamethrower';
            document.getElementById('multimove4').innerHTML = 'Scratch';
        }

    }, 1500);

}

function useSuperPotion() {

    if (potions <= 0) {
        document.getElementById('potion').disabled = true;
        return;
    } else {
        document.getElementById('potion').disabled = false;
    }
    potions--;
    document.getElementById('numOfPotions').innerHTML = potions;
    var oldHp = yourHP;
    for (let i = 0; i < 30; i++) {
        if (yourHP == 100) {
            break
        } else {
            yourHP += 1
            document.getElementById('yourHP').innerHTML = "Your Hp: " + yourHP;
            document.getElementById('yourProgress').style.width = yourHP + '%';

        }

    }


    var pokemon = document.getElementById('bigPoke').src;

    if (pokemon.includes('pikachuHomePage.gif') == true) {
        pokemon = 'Pikachu'
    } else if (pokemon.includes('bulbasaurHomePage.gif') == true) {
        pokemon = 'Bulbasaur'
    } else if (pokemon.includes('squirtleHomePage.gif') == true) {
        pokemon = 'Squirtle'
    } else {
        pokemon = 'Charmander'
    }

    var pointsHealed = yourHP - oldHp
    document.getElementById('textBoxBtm').style.display = 'block';
    document.getElementById('commentator').innerHTML = 'You used a potion. ' + pokemon + ' was healed by ' + pointsHealed + ' points.';
    setTimeout(() => {
        document.getElementById('textBoxBtm').style.display = 'none';
    }, 2000);
    if (potions == 0) {
        document.getElementById('potion').disabled = true;
    }
    document.getElementById('multimove').disabled = true;
    document.getElementById('multimove2').disabled = true;
    document.getElementById('multimove3').disabled = true;
    document.getElementById('multimove4').disabled = true;
    document.getElementById('potion').disabled = true;
    setTimeout(() => {
        document.getElementById('multimove').disabled = false;
        document.getElementById('multimove2').disabled = false;
        document.getElementById('multimove3').disabled = false;
        document.getElementById('multimove4').disabled = false;
        if ((potions <= 0) == false) {
            document.getElementById('potion').disabled = false;
        } else {
            document.getElementById('potion').disabled = true;
        }
    }, 3000);

    opponentAttack();


}
