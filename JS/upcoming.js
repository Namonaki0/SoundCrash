const eventsOutput = document.querySelector("#events-output");
const searchBar = document.querySelector(".search-bar");
const inputValue = document.querySelector("input");
const searchBtn = searchBar.querySelector("button");
const key = `Noc1VPzpTVuF1lxH`;

let artistSearch = "";

searchBtn.addEventListener("click", () => {
  artistInput = inputValue.value.toLocaleLowerCase();
  eventsOutput.innerHTML = "";
  //   eventsOutput.innerHTML = `<div>hello</div>`;
  searchArtist(artistInput);
});

function searchArtist(artistInput) {
  //   const rob_zombie = `c995a379-60b9-404b-bd97-a7e2de0751d3`;
  console.log(artistInput);
  fetch(
    `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistInput}`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(
        data.resultsPage.results.artist[0],
        data.resultsPage.results.artist[0].onTourUntil
      );
      let artist_id = data.resultsPage.results.artist[0].id;
      let isTouring = data.resultsPage.results.artist[0].onTourUntil;

      //? ARTIST NOT TOURING
      if (isTouring === null) {
        console.log("artist not touring at present");
        eventsOutput.innerHTML += `
         <div class="event-info">
            <div class="no-tour">artist not touring at present</div>
        </div>
        
        `;
      }

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
            <div><span>TOUR: </span> ${res.displayName}</div>
            <div><span>LOCATION: </span>${res.location.city}</div>
            <div><span>VENUE: </span>${res.venue.displayName}</div>
            <div><span>DATE: </span>${res.start.date}</div>
        </div>
        `;
      });
    });
}
