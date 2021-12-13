const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress')

$play.addEventListener('click', hanldePlay);
$pause.addEventListener('click', hanldePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);

if ($video.pause) {
    $pause.hidden = true;
    $play.hidden = false;
}

/*Functions*/
function hanldePlay() {
    console.log('play clicked');
    $play.hidden = true;
    $pause.hidden = false;
    $video.play();
}

function hanldePause() {
    console.log('puase clicked');
    $play.hidden = false;
    $pause.hidden = true;
    $video.pause()
}

function handleBackward() {
    $video.currentTime -= 10;
    console.log('para atras 10 segundos', $video.currentTime);
}

function handleForward() {
    $video.currentTime += 10;
    console.log('para delante 10 segundos', $video.currentTime);
}

function handleLoaded() {
    $progress.max = $video.duration;
    console.log('ha cargado el video', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

function handleInput() {
    $video.currentTime = $progress.value
}