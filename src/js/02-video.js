import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  console.log('played the video!');
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
