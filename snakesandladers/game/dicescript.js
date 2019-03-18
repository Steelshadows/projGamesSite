turn = 0;
function isEven(value) {
    if (value%2 == 0)
        return true;
    else
        return false;
}
var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
};

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}
function printNumber2(number) {
    var placeholder = document.getElementById('placeholder2');
    placeholder.innerHTML = number;
}
function printTotal(total){
       document.getElementById('total').innerHTML = total;

}

var button = document.getElementById('button');
playerPosition = {
    'player1':1,
    'player2':1,

}
button.onclick = function() {
    var total = 0;
    var result = dice.roll();
    total += result;
    printNumber(result);
    result = dice.roll();
    total += result;
    printNumber2(result);
    printTotal(total);


    if (isEven(turn)){
        var player1pos = total;
        playerPosition['player' + 1] += player1pos;
        movePlayer(1, playerPosition['player' + 1]);

    }
    else{
        var player2pos = total;
        playerPosition['player' + 2] += player2pos;
        movePlayer(2, playerPosition['player' + 2]);



    }
    turn++


    console.log(playerPosition);

    if (playerPosition.player1 >= 100 && playerPosition.player2 >=100){
        alert("wauw gelijk spel");
    }
    if (playerPosition.player1 >=100){
        movePlayer(1, 100);
        alert("speler 1 heeft gewonnen");
        // resetplayerpos()
    }
    if (playerPosition.player2 >=100){
        movePlayer(2, 100);
        alert("speler 2 heeft gewonnen");
        // resetplayerpos()
    }
    if (playerPosition.player1 == 7){
        movePlayer(1,23)
        // resetplayerpos()
    }

};




function gevenid() {
    f=0;
    for (x=0; x<10; x++){
        for (y=0; y<10; y++) {
            document.getElementsByTagName("th")[f].setAttribute("id", x+"-"+y);
            f++;
        }
        }
    }


function movePlayer(player, vakje) {

    var els = document.querySelectorAll('.player' + player);
    for(x=0; x < els.length; x++) {
        els[x].style.display = 'none';
    }

    var el = document.querySelectorAll('th[data-position="'+vakje+'"] .player'+player)
    if (el[0]) {
        el[0].style.display = 'block';
    }

}

function begin(player, vakje) {
    movePlayer(1, 1);
    movePlayer(2,1);
}
function stylelader() {
    document.getElementById("9-6").style.background="#99e6ff";
    document.getElementById("7-2").style.background="#99e6ff";

}


//reset player positions
function resetplayerpos(){
    playerPosition.player1=1;
    playerPosition.player2=1;
    begin();
}
//reset player positions end
