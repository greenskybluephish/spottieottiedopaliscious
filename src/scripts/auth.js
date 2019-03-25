const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

// Set token
let _token = hash.access_token;

const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "80c3cf7bdf244f508df3080b2acd8696";
const redirectUri = "https://greenskybluephish.github.io/spottieottiedopaliscious/";
const scopes = [
  "user-top-read playlist-modify-public",
  "playlist-modify-private"
];

// If there is no token, redirect to Spotify authorization
const getKey = () => {
  let localKey = window.sessionStorage.getItem("token");
  if (localKey === null || localKey === "undefined") {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
    window.sessionStorage.setItem("token", _token);
    console.log(_token);
  } else {
    _token = localKey;
  }
};

getKey();
