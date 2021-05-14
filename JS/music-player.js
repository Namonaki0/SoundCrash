const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector("audio");

let songs = ["alice_in_chains", "jinjer", "mushroomhead", "love_and_death"];
let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `/Music/${song}.mp3`;
}

function playSong() {
  audio.play();
  let playingState = playBtn.querySelector(".fas");
  playingState.classList.remove("fa-play");
  playingState.classList.add("fa-pause");
}

function pauseSong() {
  audio.pause();
  let pauseState = playBtn.querySelector(".fas");
  pauseState.classList.remove("fa-pause");
  pauseState.classList.add("fa-play");
}

playBtn.addEventListener("click", (e) => {
  console.log(e.target);
  let playingState = document.querySelector(".fas");
  if (playingState.classList.contains("fa-play")) {
    pauseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener("click", () => {
  songIndex++;
  audio.play();
});
