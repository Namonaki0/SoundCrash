import { apiKey } from "./api.js";

const eventsOutput = document.querySelector("#events-output");
const searchBar = document.querySelector(".search-bar");
const inputValue = document.querySelector("input");
const searchBtn = searchBar.querySelector("button");
const noArtistSpan = document.querySelector(".no-artist-error-span");
const notValidArtistSpan = document.querySelector(
  ".not-valid-artist-error-span"
);

//? EVENT LISTENERS
searchBtn.addEventListener("click", searchInput);

//? ENTER KEY SEARCH FUNCTION
inputValue.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    searchInput();
  }
});

//? ARTIST SEARCH INPUT
async function searchInput() {
  try {
    let artistInput = inputValue.value.toLowerCase();
    eventsOutput.innerHTML = "";

    if (artistInput === "") {
      inputValue.classList.add("no-artist-error");
      notValidArtistSpan.style.opacity = 0;
      noArtistSpan.style.opacity = 1;
      noArtistSpan.style.transform = "translateY(0px)";
      throw "NO ARTIST ENTERED";
    } else {
      inputValue.classList.remove("no-artist-error");
      noArtistSpan.style.opacity = 0;
      noArtistSpan.style.transform = "translateY(-10px)";
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
      `https://rest.bandsintown.com/artists/${artistInput}/?app_id=${apiKey}`
    );
    const artist = await response.json();

    if (!artist) {
      inputValue.classList.add("not-valid-artist-error");
      notValidArtistSpan.style.opacity = 1;
      notValidArtistSpan.style.transform = "translateY(0px)";
      throw "ENTER A VALID ARTIST";
    } else {
      inputValue.classList.remove("not-valid-artist-error");
      notValidArtistSpan.style.opacity = 0;
      notValidArtistSpan.style.transform = "translateY(-10px)";
    }

    tourDates(artistInput, apiKey);
  } catch (err) {
    console.log(err);
  }
}

//? TOURING INFO
async function tourDates(artistInput, apiKey) {
  try {
    const response = await fetch(
      `https://rest.bandsintown.com/artists/${artistInput}/events/?app_id=${apiKey}`
    );
    const events = await response.json();

    //? ARTIST NOT TOURING MESSAGE
    if (events.length === 0) {
      eventsOutput.innerHTML += `
         <div class="event-info">
            <div class="no-tour">artist not touring at present</div>
        </div>
        `;

      throw "ARTIST NOT TOURING AT PRESENT";
    } else {
      events.forEach((res) => {
        eventsOutput.innerHTML += `
        <div class="event-info">
            <div><span>TOUR: </span>${res.venue.name}</div>
            <div><span>CITY: </span>${res.venue.city}</div>
            <div><span>COUNTRY: </span>${res.venue.country}</div>
            <div><span>DATE: </span>${res.starts_at.slice(0, 10)}</div>
            <a class="tickets-cta" href=${
              res.url
            } target="_blank"><span>TICKETS</span></a>
        </div>
        `;
      });
    }
  } catch (err) {
    console.log(err);
  }
}
