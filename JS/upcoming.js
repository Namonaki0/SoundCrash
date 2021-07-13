import { apiKey } from "./api.js";

const eventsOutput = document.querySelector("#events-output");
const searchBar = document.querySelector(".search-bar");
const inputValue = document.querySelector("input");
const searchBtn = searchBar.querySelector("button");
const pastEvents = document.querySelector(".past-events");
const upcomingEvents = document.querySelector(".upcoming-events");
const soundKickImg = document.querySelector(".sound-kick img");
const soundKick = document.querySelector(".sound-kick");
const errorSpan = document.querySelector(".no-artist-error-span");

let artistSearch = "";

//? EVENT LISTENERS
searchBtn.addEventListener("click", searchInput);
pastEvents.addEventListener("click", pastShows);
upcomingEvents.addEventListener("click", (e) => {
  //? PREVENTS DEFAULT TOP PAGE SCROLLING
  e.preventDefault();
  //? -------------------

  searchInput();
});

//? ENTER KEY SEARCH FUNCTION
inputValue.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    searchInput();
  }
});

//? SOUNDKICK LOGO SIZE
inputValue.addEventListener("change", (e) => {
  const userInput = e.target.value;
  if (userInput === "") {
    soundKick.style.marginTop = "1rem";
    soundKickImg.classList.remove("output-size");
  }
});

//? ARTIST SEARCH INPUT
async function searchInput() {
  try {
    let artistInput = inputValue.value.toLowerCase();
    eventsOutput.innerHTML = "";

    if (artistInput === "") {
      inputValue.classList.add("no-artist-error");
      errorSpan.style.opacity = 1;
      errorSpan.style.transform = "translateY(0px)";
      throw "NO ARTIST ENTERED";
    } else {
      inputValue.classList.remove("no-artist-error");
      errorSpan.style.opacity = 0;
      errorSpan.style.transform = "translateY(-10px)";
    }

    searchArtist(artistInput);
  } catch (err) {
    console.log(err);
  }
}

//? RETRIEVE DATA ABOUT ARTIST
async function searchArtist(artistInput) {
  try {
    const response = await fetch(
      `https://api.songkick.com/api/3.0/search/artists.json?apikey=${apiKey}&query=${artistInput}`
    );
    const artists = await response.json();

    const totalEntries = artists.resultsPage.totalEntries;

    if (totalEntries === 0) {
      throw "ENTER A VALID ARTIST";
    }

    //? ARTIST ID
    let artist_id = artists.resultsPage.results.artist[0].id;
    let is_touring = artists.resultsPage.results.artist[0].onTourUntil;

    tourDates(artist_id, is_touring);
  } catch (err) {
    console.log(err);
  }
}

//? TOURING INFO
async function tourDates(artist_id, is_touring) {
  try {
    const response = await fetch(
      `https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${apiKey}`
    );
    const events = await response.json();
    const event_result = events.resultsPage.results.event;

    //? ARTIST NOT TOURING MESSAGE
    if (is_touring === null) {
      eventsOutput.innerHTML += `
         <div class="event-info">
            <div class="no-tour">artist not touring at present</div>
        </div>
        `;
      throw "ARTIST NOT TOURING AT PRESENT";
    } else {
      event_result.forEach((res) => {
        eventsOutput.innerHTML += `
        <div class="event-info">
            <div><span>TOUR: </span> ${res.displayName}</div>
            <div><span>LOCATION: </span>${res.location.city}</div>
            <div><span>VENUE: </span>${res.venue.displayName}</div>
            <div><span>DATE: </span>${res.start.date}</div>
        </div>
        `;
      });
    }
    soundKickImg.classList.add("output-size");
    soundKick.style.marginTop = "0";
  } catch (err) {
    console.log(err);
  }
}

//? BAND LIVE SHOW HISTORY
async function pastShows(e) {
  //? PREVENTS DEFAULT TOP PAGE SCROLLING
  e.preventDefault();
  //? -------------------
  try {
    if (inputValue.value === "") {
      inputValue.classList.add("no-artist-error");
      errorSpan.style.opacity = 1;
      errorSpan.style.transform = "translateY(0px)";
      throw "NO ARTIST ENTERED";
    } else {
      inputValue.classList.remove("no-artist-error");
      errorSpan.style.opacity = 0;
      errorSpan.style.transform = "translateY(-10px)";
    }

    const eventsPage = document.querySelector("#division-events");

    window.addEventListener("click", (e) => {
      if (e.target === eventsPage && inputValue.value === "") {
        eventsOutput.innerHTML = "";
      }
    });

    pastEvents.addEventListener("click", () => {
      if (inputValue.value === "") {
        eventsOutput.innerHTML = "";
      }
    });

    let artistInputPast = inputValue.value.toLowerCase();

    try {
      await fetch(
        `https://api.songkick.com/api/3.0/search/artists.json?apikey=${apiKey}&query=${artistInputPast}`
      )
        .then((data) => data.json())
        .then((data) => {
          //? ARTIST ID
          let artist_id = data.resultsPage.results.artist[0].id;
          eventsOutput.innerHTML = "";

          fetch(
            `https://api.songkick.com/api/3.0/artists/${artist_id}/gigography.json?apikey=${apiKey}`
          )
            .then((data) => data.json())
            .then((data) => {
              const event_result = data.resultsPage.results.event;

              event_result.forEach((event) => {
                eventsOutput.innerHTML += `
                  <div class="event-info">
                      <div><span>TOUR: </span> ${event.displayName}</div>
                      <div><span>LOCATION: </span>${event.location.city}</div>
                      <div><span>VENUE: </span>${event.venue.displayName}</div>
                      <div><span>DATE: </span>${event.start.date}</div>
                  </div>
                  `;
              });
            });
        });
    } catch (err) {
      console.log("ENTER A VALID ARTIST");
    }
  } catch (err) {
    console.log(err);
  }
}
