import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));
window.onload = function () {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
        player.setCurrentTime(savedTime);
    }
};



// import Player from '@vimeo/player';
// import thorttle from 'lodash.throttle';
// const Vimeo = require('@vimeo/player');
// const throttle = require('lodash.throttle');

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
// // player.on('eventName', function(data) {
// //     // data is an object containing properties specific to that event
// // });
// player.on('timeupdate', throttle(function(data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', currentTime);
// }, 1000));

// window.onload = function () {
//     const savedTime = localStorage.getItem('videoplayer-current-time');
//     if (savedTime !== null) {
//         player.setCurrentTime(savedTime);
//     }
// };
// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// },);

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

