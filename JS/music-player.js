//? GLOBAL VARIABLES
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let artistPic = document.querySelector(".artist-img-wrapper img");
let songTitle = document.querySelector(".song-title");
const audio = document.querySelector("audio");
const progressBarWrapper = document.querySelector(".progress-bar-wrapper");
const songMenu = document.querySelector(".song-menu");

//? DATA
let songs = ["alice_in_chains", "jinjer", "mushroomhead", "love_and_death"];
let artistPics = ["mp_aic", "mp_jinjer", "mp_mh", "mp_ld"];
let artists = ["alice in chains", "jinjer", "mushroomhead", "love and death"];
let songNames = [
  "private hell",
  "pit of consciousness",
  "seen it all",
  "lo lamento",
];
let songIndex = 0;

//? EVENT LISTENERS
progressBarWrapper.addEventListener("click", songSkip);
audio.addEventListener("timeupdate", songProgress);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
//? WHEN TRACK FINISHES - SKIP TO NEXT SONG
audio.addEventListener("ended", nextSong);

//? PROGRESS BAR - SKIP PROGRESS ON CLICK
function songSkip(e) {
  const width = e.target.clientWidth;
  const clickTarget = e.offsetX;
  const songDuration = audio.duration;
  audio.currentTime = (clickTarget / width) * songDuration;
}

//? PROGRESS BAR - SONG DURATION SYNC
function songProgress(e) {
  let progressBar = document.querySelector(".progress-bar");
  const { currentTime, duration } = e.srcElement;
  const progressPerc = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPerc}%`;
}

//? MUSIC LOADING
function loadSong(song, pics, artistName, songName) {
  audio.src = `/Music/${song}.mp3`;
  artistPic.src = `/Pics/${pics}.jpg`;
  songTitle.innerHTML = `${songName} - <span class="artist-name">${artistName}</span>`;
  console.log(songName.innerHTML);
}

loadSong(
  songs[songIndex],
  artistPics[songIndex],
  artists[songIndex],
  songNames[songIndex]
);

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

//? PLAY BUTTON TOGGLE - PLAY & PAUSE ICONS
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
function nextSong() {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  loadSong(
    songs[songIndex],
    artistPics[songIndex],
    artists[songIndex],
    songNames[songIndex]
  );
  playSong();
}

//? SKIP TO PREVIOUS TRACK
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(
    songs[songIndex],
    artistPics[songIndex],
    artists[songIndex],
    songNames[songIndex]
  );
  playSong();
}
