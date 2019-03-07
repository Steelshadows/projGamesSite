//document specific
scoreboard = document.querySelector('#scoreboard');
highscores = document.getElementById('highscore');
//document specific end
score=0
if(!localStorage.getItem('highscore')){
    localStorage.setItem('highscore', 0)
}
function updatescores(){
    scoreboard.innerHTML = 'score: '+score;
    highscores.innerHTML = "highScore = " + parseInt(localStorage.getItem('highscore'));
}
function savescore(){
    if (score >= parseInt(localStorage.getItem('highscore'))){localStorage.setItem('highscore',score);}
    highscores.innerHTML = "highScore = " + parseInt(localStorage.getItem('highscore'));
    // if (parseInt(localStorage.getItem('highscore')>top1){
    //     top1 = parseInt(localStorage.getItem('highscore');
    // }
    // else if (parseInt(localStorage.getItem('highscore')>top2){
    //     top2 = parseInt(localStorage.getItem('highscore');
    // }
    // else if (parseInt(localStorage.getItem('highscore')>top3){
    //     top3 = parseInt(localStorage.getItem('highscore');
    // }
    // else if (parseInt(localStorage.getItem('highscore')>top4){
    //     top4 = parseInt(localStorage.getItem('highscore');
    // }
    // else if (parseInt(localStorage.getItem('highscore')>top5){
    //     top5 = parseInt(localStorage.getItem('highscore');
    // };
}
var audio = new Audio("sounds/bomb.mp3" ) ;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var coloration = function(){
    this.style.backgroundColor = 'rgba(167, 162, 182, 0.75)';
    thisId = this.getAttribute('id');
    if(this.getAttribute('value') > 0 && this.getAttribute('value') < 9){this.innerText = this.getAttribute('value');};

    ffx = parseInt(thisId.substring(0,2));
    // console.log(ffx);
    ffy = parseInt(thisId.substring(2,4));
    // console.log(ffy);
    blockCheck(ffx,ffy);
    // console.log(this.getAttribute('value'));
    // console.log(score);
    // if (score >= parseInt(localStorage.getItem('highscore'))){localStorage.setItem('highscore',score);}
    if (this.className != 'block checked'){
        this.className += " checked";
        score += (5+parseInt(this.getAttribute('value'))*50);
    }


    scoreboard.innerHTML = 'score: '+score;
    highscores.innerHTML = "highScore = " + parseInt(localStorage.getItem('highscore'));

    fx1 = (ffx - 1).toString();
    fx3 = (ffx + 1).toString();
    fy1 = (ffy - 1).toString();
    fy3 = (ffy + 1).toString();
    if(ffx<10){ffx = '0'+ffx};
    if(ffy<10){ffy = '0'+ffy};
    // console.log(ffy);
    // console.log(ffx);

    if(fx1<10){fx1 = '0'+fx1};
    if(fy1<10){fy1 = '0'+fy1};
    // console.log(fy1);
    // console.log(fx1);

    if(fx3<10){fx3 = '0'+fx3};
    if(fy3<10){fy3 = '0'+fy3};
    // console.log(fy3);
    // console.log(fx3);


    if (document.getElementById(ffx + '' + fy1) != null && document.getElementById(ffx + '' + fy1).getAttribute('value') < 1 && document.getElementById(ffx + '' + fy1).className != 'block checked') {
        document.getElementById(ffx + '' + fy1).coloration();
    }
    if (document.getElementById(ffx + '' + fy3) != null && document.getElementById(ffx + '' + fy3).getAttribute('value') < 1 && document.getElementById(ffx + '' + fy3).className != 'block checked') {
        document.getElementById(ffx + '' + fy3).coloration();
    }
    if (document.getElementById(fx1 + '' + ffy) != null && document.getElementById(fx1 + '' + ffy).getAttribute('value') < 1 && document.getElementById(fx1 + '' + ffy).className != 'block checked') {
        document.getElementById(fx1 + '' + ffy).coloration();
    }

    if (document.getElementById(fx3 + '' + ffy) != null && document.getElementById(fx3 + '' + ffy).getAttribute('value') < 1 && document.getElementById(fx3 + '' + ffy).className != 'block checked') {
        document.getElementById(fx3 + '' + ffy).coloration();
    }
    // if (document.getElementById(fx1 + '' + fy1) != null && document.getElementById(fx1 + '' + fy1).getAttribute('value') < 1 && document.getElementById(fx1 + '' + fy1).className != 'block checked') {
    //     document.getElementById(fx1 + '' + fy1).coloration();
    // }
    // if (document.getElementById(fx1 + '' + fy3) != null && document.getElementById(fx1 + '' + fy3).getAttribute('value') < 1 && document.getElementById(fx1 + '' + fy3).className != 'block checked') {
    //     document.getElementById(fx1 + '' + fy3).coloration();
    // }
    // if (document.getElementById(fx3 + '' + fy1) != null && document.getElementById(fx3 + '' + fy1).getAttribute('value') < 1 && document.getElementById(fx3 + '' + fy1).className != 'block checked') {
    //     document.getElementById(fx3 + '' + fy1).coloration();
    // }
    // if (document.getElementById(fx3 + '' + fy3) != null && document.getElementById(fx3 + '' + fy3).getAttribute('value') < 1 && document.getElementById(fx3 + '' + fy3).className != 'block checked') {
    //     document.getElementById(fx3 + '' + fy3).coloration();
    // }



};
Element.prototype.coloration = coloration;
function blockCheck(ffx,ffy){
    
}
// function explode(fx,fy){
//     audio.play()
//     audio.oncanplaythrough = function(){
//         audio.play();
//     }
//     this.style.backgroundColor = "red";
//     for(let i=0;fx>i;i++){
//         for(let o=0;fy>o;o++){
//             if(i<10){io = '0'+i}else{io = i};
//             // console.log(io);
//             if(o<10){oi = '0'+o}else{oi = o};
//             // console.log(oi);
//             // console.log(oi+""+io);
//             document.getElementById(io+""+oi).removeEventListener('click',coloration);
//         }
//     }

// }
function createMineField(parent,fieldx,fieldy,difficulty){
    score = parseInt(0);

    // console.log(fieldx);
    // console.log(fieldy);
    updatescores();


    parent.innerHTML = "";
    fieldx = parseInt(fieldx);
    fieldy = parseInt(fieldy);
    // times = parseInt(times);
    if (fieldx<5){fieldx = 5};
    if (fieldy<5){fieldy = 5};
    if (fieldx>50){fieldx = 50};
    if (fieldy>50){fieldy = 50};
    let times = Math.floor((fieldx/3)+(fieldy/3)*difficulty);
    if (times <= 9){
        times = 10;
    }
    if (times<5){times = 5};
    if (times>60){times = 60};

    console.log('amount of mines: '+times);



    mineLocations = mines(times,fieldx,fieldy);

    for(let x=0;x<fieldx;x++) {

        currentrow = 'row'+x;
        row = document.createElement('div');
        row.className = 'row';
        row.setAttribute('id','row'+x);
        parent.appendChild(row);
        for (let y = 0; y < fieldy; y++) {
            row = document.createElement('div');
            row.className = 'row';
            row.setAttribute('id','row'+x);
            block = document.createElement('div');
            block.className = 'block';
            let locx = x;
            let locy = y;
            if(locx<10){locx = '0'+locx};
            if(locy<10){locy = '0'+locy};
            block.setAttribute('value', 0);
            block.setAttribute('id',locx+""+locy);
            block.addEventListener('click', coloration)
            //block.innerHTML = locx+""+locy;
            document.querySelector('#'+currentrow).appendChild(block)

        }
    }
    mineClicks(mineLocations,fieldx,fieldy);
}
function mines(times,fieldx,fieldy){
    times = parseInt(times);
    locations = [];
    for(let x = 0;x<times;x++){
        let locx = getRandomInt(fieldx);
        if(locx<10){locx = '0'+locx};
        let locy = getRandomInt(fieldy);
        if(locy<10){locy = '0'+locy};
        locations.push(locx+''+locy);
    }
    return locations.sort()
}
function mineClicks(allMines,fx,fy){
    for (let x = 0;x<allMines.length;x++){
        // console.log(allMines[x]);

        ffx = parseInt(allMines[x].substring(0,2));
        // console.log(ffx);
        ffy = parseInt(allMines[x].substring(2,4));
        // console.log(ffy);
        fx1 = (ffx - 1).toString();
        fx3 = (ffx + 1).toString();
        fy1 = (ffy - 1).toString();
        fy3 = (ffy + 1).toString();
        if(ffx<10){ffx = '0'+ffx};
        if(ffy<10){ffy = '0'+ffy};
        // console.log(ffy);
        // console.log(ffx);

        if(fx1<10){fx1 = '0'+fx1};
        if(fy1<10){fy1 = '0'+fy1};
        // console.log(fy1);
        // console.log(fx1);

        if(fx3<10){fx3 = '0'+fx3};
        if(fy3<10){fy3 = '0'+fy3};
        // console.log(fy3);
        // console.log(fx3);
        if(document.getElementById(allMines[x]).getAttribute('value')<10) {
            document.getElementById(allMines[x]).setAttribute("value", parseInt(document.getElementById(allMines[x]).getAttribute("value")) + 9);
            // console.log(fx1+''+ffy)

            if (document.getElementById(fx1 + '' + fy1) != null) {
                document.getElementById(fx1 + '' + fy1).setAttribute("value", parseInt(document.getElementById(fx1 + '' + ffy).getAttribute("value")) + 1);
            }
            if (document.getElementById(fx1 + '' + ffy) != null) {
                document.getElementById(fx1 + '' + ffy).setAttribute("value", parseInt(document.getElementById(fx1 + '' + ffy).getAttribute("value")) + 1);
            }
            if (document.getElementById(fx1 + '' + fy3) != null) {
                document.getElementById(fx1 + '' + fy3).setAttribute("value", parseInt(document.getElementById(fx1 + '' + fy3).getAttribute("value")) + 1);
            }
            if (document.getElementById(ffx + '' + fy1) != null) {
                document.getElementById(ffx + '' + fy1).setAttribute("value", parseInt(document.getElementById(ffx + '' + fy1).getAttribute("value")) + 1);
            }
            if (document.getElementById(ffx + '' + fy3) != null) {
                document.getElementById(ffx + '' + fy3).setAttribute("value", parseInt(document.getElementById(ffx + '' + fy3).getAttribute("value")) + 1);
            }
            if (document.getElementById(fx3 + '' + fy1) != null) {
                document.getElementById(fx3 + '' + fy1).setAttribute("value", parseInt(document.getElementById(fx3 + '' + fy1).getAttribute("value")) + 1);
            }
            if (document.getElementById(fx3 + '' + ffy) != null) {
                document.getElementById(fx3 + '' + ffy).setAttribute("value", parseInt(document.getElementById(fx3 + '' + ffy).getAttribute("value")) + 1);
            }
            if (document.getElementById(fx3 + '' + fy3) != null) {
                document.getElementById(fx3 + '' + fy3).setAttribute("value", parseInt(document.getElementById(fx3 + '' + fy3).getAttribute("value")) + 1);
            }
        }






        // console.log(document.getElementById(allMines[x]).getAttribute("value"));
        console.log(document.getElementById(allMines[x]));
        // // console.log(document.getElementById(fx1+''+(ffy)).getAttribute("value"));
        // console.log(document.getElementById(fx1+''+ffy));
        // console.log(document.getElementById(fx1+''+fy3));
        // console.log(document.getElementById(ffx+''+fy1));
        // console.log( document.getElementById(ffx+''+fy3));
        // console.log(document.getElementById(fx3+''+fy1));
        // console.log( document.getElementById(fx3+''+ffy));
        // console.log( document.getElementById(fx3+''+fy3));
        if (document.getElementById(allMines[x]).className != 'block bomb'){        document.getElementById(allMines[x]).className += " bomb";
        }

        document.getElementById(allMines[x]).addEventListener("click", function(){
            audio.play()
            audio.oncanplaythrough = function(){audio.play();}
            this.style.backgroundColor = "red";

            for(let i=0;fx>i;i++){
                for(let o=0;fy>o;o++){
                    if(i<10){io = '0'+i}else{io = i};
                    // console.log(io);
                    if(o<10){oi = '0'+o}else{oi = o};
                    // console.log(oi);
                    // console.log(oi+""+io);
                    document.getElementById(io+""+oi).removeEventListener('click',coloration);
                }
            }
            for(x=0;x < document.getElementsByClassName('block bomb').length;x++){
                document.getElementsByClassName('block bomb')[x].style.backgroundColor = "red";
            }
            // alert('your final score: '+score);
            // if (confirm('game over, start over?')){
            //     createMineField(document.querySelector('.gamezone'),18,12,25);
            // }
            if (score > localStorage.getItem(highscore)){
                // alert('wait this is wrong')
                savescore()
            }
        });
    }
}
