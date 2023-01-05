import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const KEY_LOCAL = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(currentTime.seconds));
    console.log('played the video!');
  }, 1000)
);

const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));

player
  .setCurrentTime(timeOn)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
