var $Config = {};

function start(){
    parseConfig();
    startmusic();
} //При старте

function loading(){
    
}

function parseConfig(){
    $Config.setmusic = document.getElementById('setmusic').innerHTML;
}
function startmusic(){
    var player = document.getElementById('musicplayer');
    player.src = 'sounds/music/'+$Config.setmusic+'.ogg';
    player.play();
    console.info('Играет музыка '+$Config.setmusic+' =)');
} //Запустить музыку
function collapsible(id){
    var get = document.getElementById('collapsible'+id);
    if(get.className != 'hide'){
        get.className = 'hide';
        playUI('obj_down');
    }else{
        get.className = 'none';
        playUI('objdone_up');
    }
} //Спойлеры
function background(id){
    var bg = document.body;
    bg.className = id;
    playUI('beepdown3');
} //Смена фона
function playUI(file){
    var player = document.getElementById('UIplayer');
    player.src = 'sounds/ui/'+file+'.ogg';
    player.play();
} //Пикающие звуки
function playmusic(file){
    var player = document.getElementById('musicplayer');
    player.src = 'sounds/music/'+file+'.ogg';
    player.play();
} //Играть опредилённую музыку
function playVO(file){
    var player = document.getElementById('VOplayer');
    player.src = 'sounds/vo/'+file+'.ogg';
    player.play();
} //Голосовая дорожка
function playcomp(file){ //
    var player = document.getElementById('compplayer');
    player.src = 'sounds/vo/comp/'+file+'.ogg';
    player.play();
} //Сообщения от компа
function pauseAll(){
    document.getElementById('VOplayer').pause();
    document.getElementById('UIplayer').pause();
    document.getElementById('musicplayer').pause();
} //Заткнуть всё