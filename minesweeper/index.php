<?php
if(isset($_GET['pname'])&&isset($_GET['updscore'])){
    $playernameupdate = $_GET['pname'];
    $playerscorupdate = $_GET['updscore'];
    $scorefile = fopen('highScore/scores.txt','a');
    $updatescoretext = $playernameupdate.'-'.$playerscorupdate.';';
    fwrite($scorefile,$updatescoretext);
    fclose($scorefile);
    echo $updatescoretext;
}
function build_sorter($key) {
    return function ($a, $b) use ($key) {
        return strnatcmp($b[$key], $a[$key]);
    };
}
//$scoreFileName = 'highScore/scores.txt';
//$scoreboard = fopen($scoreFileName, "a") or die("Unable to open online scoreboard!");
$contents = file_get_contents('highScore/scores.txt');
$players = explode(';',$contents);
$finalscores = [];
array_pop($players);
for($x=0;count($players)>$x;$x++){
    $tmp = explode('-',$players[$x]);
    array_push($finalscores,['name' => $tmp[0],'score' => $tmp[1]]);
//    $onlineScoreboard .= '<div class="row">';
//    $onlineScoreboard .= '<div class="cell playertag"></div>';
}

usort($finalscores, build_sorter('score'));
$onlineScoreboard = '<div class="tbl"><div class="row"><h3>TOP 5:</h3></div>';
$top5 = [];
for($r=0;5>$r;$r++){
    if(isset($finalscores[$r]['score'])) {
        array_push($top5,['name' => $finalscores[$r]['name'],'score' => $finalscores[$r]['score']]);
        $onlineScoreboard .= '<div class="row">';
        $onlineScoreboard .= '<div class="cell playertag">' . $finalscores[$r]['name'] . '</div>';
        $onlineScoreboard .= '<div class="cell scores">' . $finalscores[$r]['score'] . '</div>';
        $onlineScoreboard .= '</div>';
    }
    if(!isset($finalscores[$r]['score'])) {
        array_push($top5,['name' => 'none','score' => 0]);
        $onlineScoreboard .= '<div class="row">';
        $onlineScoreboard .= '<div class="cell playertag">none</div>';
        $onlineScoreboard .= '<div class="cell scores">0</div>';
        $onlineScoreboard .= '</div>';
    }
}
$onlineScoreboard .= '</div>';
$JStop5 = ' var top1 ='.$top5[0]['score'].';
            var top2 ='.$top5[1]['score'].';
            var top3 ='.$top5[2]['score'].';
            var top4 ='.$top5[3]['score'].';
            var top5 ='.$top5[4]['score'].';'


?>
<html>
<head>
<link rel="stylesheet" href="../CSS/mineSweeper.css">
</head>
<body>
<div class="container">
    <div class="gamezone"></div>
    <div class="gameInfo">
        <div>
            <p>height:</p>
            <input id="lx" type="number" placeholder="height" min="5" max="50" value="18" onchange="
            if(this.value>50){this.value= 50};
            if(this.value<5){this.value= 5}">
        </div>
        <div>
            <p>width:</p>
            <input id="ly" type="number" placeholder="width" min="5" max="50" value="12" onchange="
            if(this.value>50){this.value= 50};
            if(this.value<5){this.value= 5}">
        </div>
        <div>
            <p>amount of mines:</p>
            <input id="am" type="range" placeholder="mines" min="1" max="6" value="3">
        </div>
        <div>
            <button onclick="createMineField(document.querySelector('.gamezone'),document.querySelector('#lx').value,document.querySelector('#ly').value,document.querySelector('#am').value);">
                Start Over
            </button>
        </div>
        <!--<div>-->
            <!--<button onclick="if (score >= parseInt(localStorage.getItem('highscore'))){localStorage.setItem('highscore',score);};document.getElementById('highscore').innerHTML = 'highScore = ' + parseInt(localStorage.getItem('highscore'));">submit highscore</button>-->
        <!--</div>-->
        <div>
            <button onclick="if(confirm('wilt u echt de locale highscore resetten?')){localStorage.setItem('highscore',0);document.getElementById('highscore').innerHTML = 'highScore = ' + parseInt(localStorage.getItem('highscore'))}">Reset highscore</button>
        </div>
        <div id="scoreboard"></div>
        <div id="highscore"></div>
        <div id="leaderboard"><?=$onlineScoreboard?></div>





    </div>
</div>




<script src="../JS/mineSweeper.js"></script>
<script>
    <?=$JStop5?>
    createMineField(document.querySelector('.gamezone'),18,12,3);
</script>
</body>
</html>