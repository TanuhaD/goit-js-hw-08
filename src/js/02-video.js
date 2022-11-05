import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player(document.querySelector('#vimeo-player'));
// console.log(player);

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
const time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(+time);
