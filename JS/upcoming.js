const eventsOutput = document.querySelector("#events-output");
const searchBar = document.querySelector(".search-bar");
const inputValue = document.querySelector("input");
const searchBtn = searchBar.querySelector("button");
const key = `Noc1VPzpTVuF1lxH`;

let artist = "";

searchBtn.addEventListener("click", () => {
  artist = inputValue.value;
  //   eventsOutput.innerHTML = `<div>hello</div>`;
  searchArtist(artist);
});

function searchArtist(artist) {
  //   const rob_zombie = `c995a379-60b9-404b-bd97-a7e2de0751d3`;
  console.log(artist);
  fetch(
    `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artist}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data.resultsPage.results.artist[0]);
      let artist_id = data.resultsPage.results.artist[0].id;

      tourDates(artist_id);
    });
}

function tourDates(artist_id) {
  fetch(
    `https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${key}`
  )
    .then((res) => res.json())
    .then((res) => {
      const event_result = res.resultsPage.results.event;
      event_result.forEach((res) => {
        console.log(res);
        eventsOutput.innerHTML += `
        <div class="event-info">
            <div>TOUR: ${res.displayName}</div>
            <div>LOCATION: ${res.location.city}</div>
            <div>DATE: ${res.start.date}</div>
            <div>VENUE: ${res.venue.displayName}</div>
        </div>
        `;
      });
    });
}

// res.location
// res.start
// res.venue.displayName
