//? GLOBAL
const honorableMentions = document.querySelector("aside");
// const artistNum = honorableMentions.querySelectorAll(".artist-num");
const main = document.querySelector("main");
const numSystem = main.querySelectorAll(".num-system");
const innerWrap = document.querySelector(".inner-wrap");
const artistSlot = document.querySelectorAll(".artist-slot");
const artistInfoWrap = honorableMentions.querySelector(".artist-info-wrap");
const recordTracklist = honorableMentions.querySelector(".record-tracklist");
const recordMenu = document.querySelector(".record-menu-open");
const recordAsideChoices = document.querySelector(".side-view");
const records = document.querySelectorAll(".side-view-img-wrap");
const artistCover = document.querySelector(".img-wrap img");
const recordTitle = document.querySelector(".record-title");
const artistTitle = document.querySelector(".artist-title");

//? ON PAGE LOAD
document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("data/top-four.json");
  const top_four = await response.json();

  //? OBJECT DESTRUCT
  const {
    artists,
    records,
    recordCovers,
    recordTracks,
    releaseDate,
    recordLabel,
  } = top_four;

  recordTitle.innerHTML = `${records[0]}`;
  artistTitle.innerHTML = `${artists[0]}`;
  //? RECORD STANDARD VIEW
  artistCover.src = recordCovers[0];
  artistInfoWrap.innerHTML = `
          <div class="artist-info-inner-wrap">
            <div class="extra-info">
              <p class="release-info"><i class="fas fa-hand-holding-usd"></i><span class="release-span">${releaseDate[0]}</span></p>
              <p class="record-info"><i class="fas fa-record-vinyl"></i><span class="record-span">${recordLabel[0]}</span></p>
            </div>
          </div>
        `;
  //? TRACKLIST
  recordTracklist.innerHTML = `<div class="record-tracklist-styling"></div>`;
  //? -BLACK GIVES WAY TO BLUE- RECORD DISPLAY
  for (i = 1; i < recordTracks.black_gives_way_to_blue.length; i++) {
    const recordTracklistInfo = document.querySelector(
      ".record-tracklist-styling"
    );
    recordTracklistInfo.innerHTML += `<div><span class="tracklist-num">${i}</span> - ${recordTracks.black_gives_way_to_blue[i]}</div>`;
  }
});

//? RECORD OPTIONS MENU
recordMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (recordAsideChoices.classList.contains("show")) {
    recordAsideChoices.classList.remove("show");
    recordMenu.innerHTML = `<i class="fas fa-chevron-up"></i>`;
  } else {
    recordMenu.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    recordAsideChoices.classList.add("show");
  }
});

//? INDIVIDUAL RECORD INFORMATION
records.forEach((each_record) => {
  each_record.addEventListener("click", (e) => {
    const dataSet = e.target.dataset.value;
    const title = document.querySelector(".inner-wrap h2");
    const albumCover = document.querySelector(".img-wrap img");
    const imgWrap = document.querySelector(".img-wrap");
    const recordTracklistInfo = document.querySelector(
      ".record-tracklist-styling"
    );

    //? EMPTY TRACKLIST FOR NEXT CHOICE
    if (e.target != dataSet) {
      recordTracklistInfo.innerHTML = "";
    }
    switch (dataSet) {
      case "one":
        e.target.src = recordCovers[0];
        recordCover.src = e.target.src;
        recordTitle.innerHTML = `${records[0]}`;
        artistTitle.innerHTML = `${artists[0]}`;
        artistInfoWrap.innerHTML = `
          <div class="artist-info-inner-wrap">
            <div class="extra-info">
              <p class="release-info"><i class="fas fa-hand-holding-usd"></i><span class="release-span">${releaseDate[0]}</span></p>
              <p class="record-info"><i class="fas fa-record-vinyl"></i><span class="record-span">${recordLabel[0]}</span></p>
            </div>
          </div>
        `;
        for (i = 1; i < recordTracks.black_gives_way_to_blue.length; i++) {
          const recordTracklistInfo = document.querySelector(
            ".record-tracklist-styling"
          );
          recordTracklistInfo.innerHTML += `<div><span class="tracklist-num">${i}</span> - ${recordTracks.black_gives_way_to_blue[i]}</div>`;
        }
        break;
      case "two":
        e.target.src = recordCovers[1];
        recordCover.src = e.target.src;
        recordTitle.innerHTML = `${records[1]}`;
        artistTitle.innerHTML = `${artists[1]}`;
        artistInfoWrap.innerHTML = `
          <div class="artist-info-inner-wrap">
            <div class="extra-info">
              <p class="release-info"><i class="fas fa-hand-holding-usd"></i><span class="release-span">${releaseDate[1]}</span></p>
              <p class="record-info"><i class="fas fa-record-vinyl"></i><span class="record-span">${recordLabel[1]}</span></p>
            </div>
          </div>
        `;
        for (i = 1; i < recordTracks.macro.length; i++) {
          const recordTracklistStyling = document.querySelector(
            ".record-tracklist-styling"
          );
          recordTracklistStyling.innerHTML += `<div><span class="tracklist-num">${i}</span> - ${recordTracks.macro[i]}</div>`;
        }
        break;
      case "three":
        e.target.src = recordCovers[2];
        recordCover.src = e.target.src;
        recordTitle.innerHTML = `${records[2]}`;
        artistTitle.innerHTML = `${artists[2]}`;
        artistInfoWrap.innerHTML = `
          <div class="artist-info-inner-wrap">
            <div class="extra-info">
              <p class="release-info"><i class="fas fa-hand-holding-usd"></i><span class="release-span">${releaseDate[2]}</span></p>
              <p class="record-info"><i class="fas fa-record-vinyl"></i><span class="record-span">${recordLabel[1]}</span></p>
            </div>
          </div>
        `;
        for (i = 1; i < recordTracks.a_wonderful_life.length; i++) {
          const recordTracklistInfo = document.querySelector(
            ".record-tracklist-styling"
          );
          recordTracklistInfo.innerHTML += `<div><span class="tracklist-num">${i}</span> - ${recordTracks.a_wonderful_life[i]}</div>`;
        }
        break;
      case "four":
        e.target.src = recordCovers[3];
        recordCover.src = e.target.src;
        recordTitle.innerHTML = `${records[3]}`;
        artistTitle.innerHTML = `${artists[3]}`;
        artistInfoWrap.innerHTML = `
          <div class="artist-info-inner-wrap">
            <div class="extra-info">
              <p class="release-info"><i class="fas fa-hand-holding-usd"></i><span class="release-span">${releaseDate[3]}</span></p>
              <p class="record-info"><i class="fas fa-record-vinyl"></i><span class="record-span">${recordLabel[2]}</span></p>
            </div>
          </div>
        `;
        for (i = 1; i < recordTracks.perfectly_preserved.length; i++) {
          const recordTracklistInfo = document.querySelector(
            ".record-tracklist-styling"
          );
          recordTracklistInfo.innerHTML += `<div><span class="tracklist-num">${i}</span> - ${recordTracks.perfectly_preserved[i]}</div>`;
        }
        break;
      default:
        return;
    }
  });
});

//? INTERSECTION OBSERVERS
let options = {
  threshold: 1,
  rootMargin: "0px",
};

observer1 = new IntersectionObserver(entries, options);

function entries(numSystem) {
  numSystem.forEach((num) => {
    if (num.isIntersecting && num.intersectionRatio > 0) {
      num.target.classList.add("special");
    } else {
      num.target.classList.remove("special");
    }
  });
}

numSystem.forEach((num) => {
  observer1.observe(num);
});

// observer2 = new IntersectionObserver(entries, options);

// function entries(artistNum) {
//   artistNum.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio > 0) {
//       entry.target.classList.add("special");
//     } else {
//       entry.target.classList.remove("special");
//     }
//   });
// }

// artistNum.forEach((entry) => {
//   observer2.observe(entry);
// });
