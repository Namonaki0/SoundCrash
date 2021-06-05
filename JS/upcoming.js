const eventsOutput = document.querySelector("#events-output");
const searchBar = document.querySelector(".search-bar");
const inputValue = document.querySelector("input");
const searchBtn = searchBar.querySelector("button");
const pastEvents = document.querySelector(".past-events");
const upcomingEvents = document.querySelector(".upcoming-events");
const key = `Noc1VPzpTVuF1lxH`;

let artistSearch = "";

//? EVENT LISTENERS
searchBtn.addEventListener("click", searchInput);
pastEvents.addEventListener("click", pastShows);
upcomingEvents.addEventListener("click", searchInput);
inputValue.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    searchInput();
  }
});

//? ARTIST SEARCH INPUT
async function searchInput() {
  let artistInput = inputValue.value.toLowerCase();
  eventsOutput.innerHTML = "";

  searchArtist(artistInput);
}

//? RETRIEVE DATA ABOUT ARTIST
async function searchArtist(artistInput) {
  await fetch(
    `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistInput}`
  )
    .then((data) => data.json())
    .then((data) => {
      //? ARTIST ID
      let artist_id = data.resultsPage.results.artist[0].id;
      let is_touring = data.resultsPage.results.artist[0].onTourUntil;

      tourDates(artist_id, is_touring);
    });
}

//? TOURING INFO
function tourDates(artist_id, is_touring) {
  fetch(
    `https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${key}`
  )
    .then((res) => res.json())
    .then((res) => {
      const event_result = res.resultsPage.results.event;

      //? ARTIST NOT TOURING MESSAGE
      if (is_touring === null) {
        console.log("artist not touring at present");
        eventsOutput.innerHTML += `
         <div class="event-info">
            <div class="no-tour">artist not touring at present</div>
        </div>
        `;
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
    });
}

async function pastShows() {
  let artistInputPast = inputValue.value.toLowerCase();
  await fetch(
    `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistInputPast}`
  )
    .then((data) => data.json())
    .then((data) => {
      //? ARTIST ID
      let artist_id = data.resultsPage.results.artist[0].id;
      eventsOutput.innerHTML = "";

      fetch(
        `https://api.songkick.com/api/3.0/artists/${artist_id}/gigography.json?apikey=${key}`
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
}
