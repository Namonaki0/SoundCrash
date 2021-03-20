//? INTERSECTION OBSERVERS

const honorableMentions = document.querySelector("aside");
const artistNum = honorableMentions.querySelectorAll(".artist-num");
const main = document.querySelector("main");
const numSystem = main.querySelectorAll(".num-system");
const innerWrap = document.querySelector(".inner-wrap");
const artistSlot = document.querySelectorAll(".artist-slot");
const artistInfoWrap = honorableMentions.querySelectorAll(".artist-info-wrap");

const artistInfo = {
  artist: ["jinjer", "mushroomhead", "love and death"],
  record: ["macro", "a wonderful life", "perfectly preserved"],
  releaseDate: ["25 October 2019", "19 June 2020", "12 February 2021"],
  recordLabel: ["Napalm Records", "Earache Records Ltd"],
};

const { artist, record, releaseDate, recordLabel } = artistInfo;

artistInfoWrap.forEach((info) => {
  if (info.classList.contains("one")) {
    info.innerHTML = `
    <div class="artist-info-inner-wrap">
      <h3 class="record-name">${record[0]}</h3>
      <h4 class="artist-name">by <span class="artist-span">${artist[0]}</span></h4>
      <div class="extra-info">
        <p class="release-info">released: <br /> <span class="release-span">${releaseDate[0]}</span></p>
        <p class="record-info">label: <br /> <span class="record-span">${recordLabel[0]}</span></p>
      </div>
    </div>
    `;
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

let options = {
  threshold: 1,
  rootMargin: "0px",
};

observer1 = new IntersectionObserver(entries, options);

function entries(numSystem) {
  numSystem.forEach((num) => {
    console.log(num);
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
    console.log(entry);
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
