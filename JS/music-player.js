const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const audio = document.querySelector("audio");

let songs = ["alice_in_chains", "jinjer", "mushroomhead", "love_and_death"];
let songIndex = 0;

function loadSong(song) {
  audio.src = `/Music/${song}.mp3`;
}

loadSong(songs[songIndex]);

//? PLAY CURRENT SONG
function playSong() {
  audio.play();
  const songTitle = document.querySelector(".song-title");
  let playingState = playBtn.querySelector(".fas");
  playingState.classList.remove("fa-play");
  playingState.classList.add("fa-pause");
  songTitle.classList.add("show");
}

//? PAUSE CURRENT SONG
function pauseSong() {
  audio.pause();
  const songTitle = document.querySelector(".song-title");
  let pauseState = playBtn.querySelector(".fas");
  pauseState.classList.remove("fa-pause");
  pauseState.classList.add("fa-play");
  songTitle.classList.remove("show");
}

//?
playBtn.addEventListener("click", () => {
  let playingState = document.querySelector(".play-btn .fas");
  playingState.classList.toggle("fa-pause");
  if (playingState.classList.contains("fa-pause")) {
    playSong();
  } else {
    pauseSong();
  }
});

//? SKIP TO FOLLOWING TRACK
nextBtn.addEventListener("click", () => {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
});

//? SKIP TO PREVIOUS TRACK
prevBtn.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
});
