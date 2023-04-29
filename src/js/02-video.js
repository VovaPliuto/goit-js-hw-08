import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 236203659,
  width: 640,
});

if (localStorage.getItem('videoplayer-current-time') !== null) {
  const seconds = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  ).seconds;

  player.setCurrentTime(seconds).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
}

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  console.log(data);
}

// console.log(localStorage.getItem('videoplayer-current-time'));
// console.log(throttle);
