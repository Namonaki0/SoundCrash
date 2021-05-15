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
  let playingState = document.querySelector(".play-btn .fas");
  playingState.classList.toggle("fa-pause");
  if (playingState.classList.contains("fa-pause")) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  audio.play();
});

prevBtn.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songs[songIndex] = -1;
  }
  loadSong(songs[songIndex]);
  audio.play();
});
