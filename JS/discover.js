//? GLOBAL
const honorableMentions = document.querySelector("aside");
const artistNum = honorableMentions.querySelectorAll(".artist-num");
const main = document.querySelector("main");
const numSystem = main.querySelectorAll(".num-system");
const innerWrap = document.querySelector(".inner-wrap");
const artistSlot = document.querySelectorAll(".artist-slot");
const artistInfoWrap = honorableMentions.querySelectorAll(".artist-info-wrap");
const recordTracklist = honorableMentions.querySelector(".record-tracklist");
const recordMenu = document.querySelector(".record-menu-open");
const recordAsideChoices = document.querySelector(".side-view");
const records = document.querySelectorAll(".side-view-img-wrap");

//? ARTIST / RECORD INFO
const artistInfo = {
  artist: ["jinjer", "mushroomhead", "love and death"],
  albumCovers: [
    "/Pics/aic.jpg",
    "jinjer.jpg",
    "mushroomhead.jpg",
    "love-and-death.PNG",
  ],
  record: ["macro", "a wonderful life", "perfectly preserved"],
  recordTracks: {
    black_gives_way_to_blue: [
      "All Secrets Known",
      "Check My Brain",
      "Last of My Kind",
      "Your Decision",
      "A Looking in View",
      "When the Sun Rose Again",
      "Acid Bubble",
      "Lesson Learned",
      "Take Her Out",
      "Private Hell",
      "Black Gives Way to Blue",
    ],
    macro: [
      "On The Top",
      "Pit Of Consciousness",
      "Judgement (& Punishment)",
      "Retrospection",
      "Pausing Death",
      "Noah",
      "Home Back",
      "The Prophecy",
      "lainnereP",
    ],
    a_wonderful_life: [
      "A Requiem for Tomorrow",
      "Madness Within",
      "Seen It All",
      "The Heresy",
      "What a Shame",
      "Pulse",
      "Carry On",
      "The Time Has Come",
      "11th Hour",
      "I Am the One",
      "The Flood",
      "Where the End Begins",
      "Confutatis",
    ],
    perfectly_preserved: [
      "Infamy",
      "Tragedy",
      "Down",
      "Let Me Love You",
      "Death of Us",
      "Slow Fire",
      "The Hunter",
      "Lo Lamento",
      "Affliction",
      "White Flag",
    ],
  },
  releaseDate: [
    "29 September 2009",
    "25 October 2019",
    "19 June 2020",
    "12 February 2021",
  ],
  recordLabel: ["Virgin/EMI", "Napalm Records", "Earache Records Ltd"],
};

records.forEach((cd) => {
  cd.addEventListener("click", (e) => {
    const dataSet = e.target.dataset.value;
    console.dir(e.target.src);
    switch (dataSet) {
      case "one":
        e.target.src = albumCovers[0];
        break;
      default:
        return;
    }
  });
});

//? OBJECT DESTRUCT
const { artist, record, albumCovers, recordTracks, releaseDate, recordLabel } =
  artistInfo;

//? ARTIST PAGE DISPLAY
artistInfoWrap.forEach((info) => {
  if (info.classList.contains("one")) {
    info.innerHTML = `
    <div class="artist-info-inner-wrap">
      
      <div class="extra-info">
        <p class="release-info"><i class="fas fa-hand-holding-usd"></i><span class="release-span">${releaseDate[1]}</span></p>
        <p class="record-info"><i class="fas fa-record-vinyl"></i><span class="record-span">${recordLabel[1]}</span></p>
      </div>
    </div>
    `;
    //? TRACKLIST
    recordTracklist.innerHTML = `<div class="record-tracklist-styling"></div>`;
    ////////////?
  } else if (info.classList.contains("two")) {
    info.innerHTML = `
    <div class="artist-info-inner-wrap">
      <h3 class="record-name">${record[1]}</h3>
      <h4 class="artist-name">by <span class="artist-span">${artist[1]}</span></h4>
      <div class="extra-info">
        <p class="release-info">released: <br /> <span class="release-span">${releaseDate[1]}</span></p>
        <p class="record-info">label: <br /> <span class="record-span">${recordLabel[0]}</span></p>
      </div>
    </div>
    `;
  } else {
    info.innerHTML = `
    <div class="artist-info-inner-wrap">
      <h3 class="record-name">${record[2]}</h3>
      <h4 class="artist-name">by <span class="artist-span">${artist[2]}</span></h4>
      <div class="extra-info">
        <p class="release-info">released: <br /> <span class="release-span">${releaseDate[2]}</span></p>
        <p class="record-info">label: <br /> <span class="record-span">${recordLabel[1]}</span></p>
      </div>
    </div>
    `;
  }
});

//? TRACKLIST INJECTED IN PAGE
for (i = 1; i < recordTracks.macro.length; i++) {
  const recordTracklistInfo = document.querySelector(
    ".record-tracklist-styling"
  );
  recordTracklistInfo.innerHTML += `<div><span class="tracklist-num">${i}</span> - ${recordTracks.macro[i]}</div>`;
}

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

observer2 = new IntersectionObserver(entries, options);

function entries(artistNum) {
  artistNum.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0) {
      entry.target.classList.add("special");
    } else {
      entry.target.classList.remove("special");
    }
  });
}

artistNum.forEach((entry) => {
  observer2.observe(entry);
});

recordMenu.addEventListener("click", () => {
  if (recordAsideChoices.classList.contains("show")) {
    recordAsideChoices.classList.remove("show");
    recordMenu.innerHTML = `<i class="fas fa-chevron-up"></i>`;
  } else {
    recordMenu.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    recordAsideChoices.classList.add("show");
  }
});
