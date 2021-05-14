const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const audio = document.querySelector("audio");

let songs = ["alice_in_chains", "jinjer", "mushroomhead", "love_and_death"];
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `/Music/${song}.mp3`;
}

if (pauseBtn) {
  console.log("PAUSE");
}

function playSong() {
  audio.play();
  let playingState = document.querySelector(".fa-play");
  playingState.classList.remove("fa-play");
  playingState.classList.add("fa-pause");
}

function pauseSong() {
  audio.pause();
  let pauseState = document.querySelector(".fa-pause");
  pauseState.classList.remove("fa-pause");
  pauseState.classList.add("fa-play");
}

playBtn.addEventListener("click", () => {
  playSong();
});

pauseBtn.addEventListener("click", () => {
  pauseSong();
});
