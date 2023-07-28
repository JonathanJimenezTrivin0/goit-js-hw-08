import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function play(data) {
  localStorage.setItem('reproductor', data.seconds);
}

player
  .setCurrentTime(localStorage.getItem('reproductor'))
  .then(function (time) {
    console.log(time);
    time = localStorage.getItem('reproductor');
  });

player.on('timeupdate', throttle(play, 100));
