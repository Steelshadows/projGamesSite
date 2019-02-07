var audio = new Audio("sounds/bomb.mp3" ) ;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var coloration = function(){
    this.style.backgroundColor = 'rgba(167, 162, 182, 0.75)'
};
function explode(fx,fy){
    audio.play()
    audio.oncanplaythrough = function(){
        audio.play();
    }
    this.style.backgroundColor = "red";
    for(let i=0;fx>i;i++){
        for(let o=0;fy>o;o++){
            if(i<10){io = '0'+i}else{io = i};
            console.log(io);
            if(o<10){oi = '0'+o}else{oi = o};
            console.log(oi);
            console.log(oi+""+io);
            document.getElementById(io+""+oi).removeEventListener('click',coloration);
        }
    }

}
function createMineField(parent,fieldx,fieldy,times){
    console.log(fieldx);
    console.log(fieldy);
    console.log(times);

    parent.innerHTML = "";
    fieldx = parseInt(fieldx);
    fieldy = parseInt(fieldy);
    times = parseInt(times);
    if (fieldx<5){fieldx = 5};
    if (fieldy<5){fieldy = 5};
    if (times<5){times = 5};
    if (fieldx>50){fieldx = 50};
    if (fieldy>50){fieldy = 50};
    if (times>60){times = 60};




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
    return locations
}
function mineClicks(allMines,fx,fy){
    for (let x = 0;x<allMines.length;x++){
        console.log(allMines[x]);
        document.getElementById(allMines[x]).addEventListener("click", function(){
            audio.play()
            audio.oncanplaythrough = function(){
                audio.play();
            }
            this.style.backgroundColor = "red";

            for(let i=0;fx>i;i++){
                for(let o=0;fy>o;o++){
                    if(i<10){io = '0'+i}else{io = i};
                    console.log(io);
                    if(o<10){oi = '0'+o}else{oi = o};
                    console.log(oi);
                    console.log(oi+""+io);
                    document.getElementById(io+""+oi).removeEventListener('click',coloration);
                }
            }
            if (confirm('game over, start over?')){
                createMineField(document.querySelector('.gamezone'),18,12,25);
            }
        });
    }
}


