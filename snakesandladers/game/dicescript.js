turn = 0;
<<<<<<< HEAD
p1turns =0;
p2turns =0;
=======
currentplayer = '';
>>>>>>> caa3e4977dc2e1e86b72f1d1a9de36aebb00ef40
function isEven(value) {
    if (value%2 == 0){
        p2turns++;
        return true;

    }

    else{
        p1turns++;
        return false;
    }

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
        currentplayer = 2;
        var player1pos = total;
        playerPosition['player' + 1] += player1pos;
        movePlayer(1, playerPosition['player' + 1]);

    }
    else{
        currentplayer = 1;
        var player2pos = total;
        playerPosition['player' + 2] += player2pos;
        movePlayer(2, playerPosition['player' + 2]);



    }
    turn++

    console.log(p1turns);
    console.log(p2turns);

    console.log(playerPosition);

    if (playerPosition.player1 >= 100 && playerPosition.player2 >=100){
        alert("wauw gelijk spel");
    }


    if(!localStorage.getItem("p1hs")){
        localStorage.setItem('p1hs',99999);
    }
    if(!localStorage.getItem("p2hs")){
        localStorage.setItem('p2hs',99999);
    }


    if (playerPosition.player1 >=100){
        movePlayer(1, 100);
        alert("speler 1 heeft gewonnen");
        if (p1turns<localStorage.getItem('p1hs')) {
            localStorage.setItem("p1hs", p1turns);
        }
        loadhs()


    }
    if (playerPosition.player2 >=100){
        movePlayer(2, 100);
        alert("speler 2 heeft gewonnen");
        if (p2turns<localStorage.getItem('p2hs')) {
            localStorage.setItem("p2hs", p2turns);
        }
        loadhs()




    }

      //laders p1
    if (playerPosition.player1 == 7){
        movePlayer(1,23)
        playerPosition.player1 = 23;


    }
    if (playerPosition.player1 == 16){
        movePlayer(1,33)
        playerPosition.player1 = 33;

    }
    if (playerPosition.player1 == 75){
        movePlayer(1,97)
        playerPosition.player1 = 97;

    }

    //snakes p1
    if (playerPosition.player1 == 35){
        movePlayer(1,10)
        playerPosition.player1 = 10;

    }
    if (playerPosition.player1 == 56){
        movePlayer(1,19)
        playerPosition.player1 = 19;

    }
    if (playerPosition.player1 == 99){
        movePlayer(1,80)
        playerPosition.player1 = 80;

    }
    //laders p2
    if (playerPosition.player2 == 7){
        movePlayer(2,23)
        playerPosition.player2 = 23;

    }
    if (playerPosition.player2 == 16){
        movePlayer(2,33)
        playerPosition.player2 = 33;

    }
    if (playerPosition.player2 == 75){
        movePlayer(2,97)
        playerPosition.player2 = 97;

    }

    //snakes p2
    if (playerPosition.player2 == 35){
        movePlayer(2,10)
        playerPosition.player2 = 10;

    }
    if (playerPosition.player2 == 56){
        movePlayer(2,19)
        playerPosition.player2 = 19;

    }
    if (playerPosition.player2 == 99){
        movePlayer(2,80)
        playerPosition.player2 = 80;

    }
    if (playerPosition.player1 > 100){
        resetplayerpos()
    }
    if (playerPosition.player2 > 100){
        resetplayerpos()
    }

};

function loadhs() {;
    document.getElementById("hsp1").innerText = localStorage.getItem("p1hs") === "99999" ? '-' : localStorage.getItem("p1hs") ;
    document.getElementById("hsp2").innerText = localStorage.getItem("p2hs") === "99999" ? '-' : localStorage.getItem("p2hs") ;
}


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
    //laders
    //1
    document.getElementById("9-6").style.background ="url('img/ladders.png')";
    document.getElementById("9-6").style.color = "red";
    document.getElementById("7-2").style.color = "red";
    document.getElementById("7-2").style.background="url('img/ladders.png')";
    //1
    //2
    document.getElementById("8-4").style.background="url('img/woodladder1.png')";
    document.getElementById("8-4").style.color = "red";
    document.getElementById("6-7").style.color = "red";
    document.getElementById("6-7").style.background ="url('img/woodladder1.png')";
    //2
    //3
    document.getElementById("2-5").style.background= "url('img/ladder2-1.jpg')";
    document.getElementById("2-5").style.color = "red";
    document.getElementById("0-3").style.color = "red";
    document.getElementById("0-3").style.background= "url('img/ladder2-1.jpg')";
    //snakes
    //1
    document.getElementById("6-5").style.background ="url('img/slang1.jpg')";
    document.getElementById("6-5").style.color = "red";
    document.getElementById("9-9").style.color = "red";
    document.getElementById("9-9").style.background ="url('img/slangstaart.jpg')";
    //1
    //2
    document.getElementById("4-4").style.background = "url('img/slang1.jpg')";
    document.getElementById("4-4").style.color = "red";
    document.getElementById("8-1").style.color = "red";
    document.getElementById("8-1").style.background = "url('img/slangstaart.jpg')";
    //2
    //3
    document.getElementById("0-1").style.background = "url('img/slang1.jpg')";
    document.getElementById("0-1").style.color = "red";
    document.getElementById("2-0").style.color = "red";
    document.getElementById("2-0").style.background = "url('img/slangstaart.jpg')";
}


//reset player positions
function resetplayerpos(){
    loadhs();
    playerPosition.player1=1;
    p1turns =0;
    playerPosition.player2=1;
    p2turns =0;
    begin();
}

