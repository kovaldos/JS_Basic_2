const videoEl = document.querySelector('.video__video');
const progressEl = document.querySelector('.video-timer__range');
const currentProgressEl = document.querySelector('.video-timer__current');
const playEl = document.querySelector('.video__play');
const pauseEl = document.querySelector('.video__pause');
const volumeEl = document.querySelector('.video-volume__control');
const currentVolumeEl = document.querySelector('.video-volume__value');

document.addEventListener('DOMContentLoaded', () => {
  if (videoEl) {
    playEl.addEventListener('click', () => {
      videoEl.play();
    })
    pauseEl.addEventListener('click', () => {
      videoEl.pause();
    })

    videoEl.addEventListener('timeupdate', () => {
      const minutes = Math.floor((videoEl.currentTime / 60));
      const seconds = Math.floor((videoEl.currentTime % 60));
      currentProgressEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      progressEl.value = videoEl.currentTime / videoEl.duration * 100;
    })

    progressEl.addEventListener('input', () => {
      videoEl.currentTime = progressEl.value / 100 * videoEl.duration;
    })

    volumeEl.addEventListener('input', () => {
      const volume = volumeEl.value;
      videoEl.volume = volume;
      currentVolumeEl.textContent = Math.round(volume * 10);
    })
  }
})
