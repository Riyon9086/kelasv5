const favSongs = document.querySelectorAll('.fav-song');

favSongs.forEach(function(favSong) {
  const playBtn = favSong.querySelector('i');
  const audio = new Audio();
  let isPlaying = false;

  favSong.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      playBtn.classList.remove('fa-pause');
      playBtn.classList.add('fa-play');
    } else {
      audio.play();
      playBtn.classList.remove('fa-play');
      playBtn.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener('ended', function() {
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
    isPlaying = false;
  });

  if (favSong.textContent.trim() === "18 - One Direction") {
    audio.src = './src/song/18.mp3';
  } else if (favSong.textContent.trim() === "A Thousand Years - James Arthur") {
    audio.src = './src/song/a thousand years.mp3';
  } else if (favSong.textContent.trim() === "In The Stars - Benson Boone") {
    audio.src = './src/song/in the stars.mp3';
  } else if (favSong.textContent.trim() === "Serena - For Revenge") {
    audio.src = './src/song/serena.mp3';
  }
});