function handleClick(event) {
  const userName = document.querySelector("#userName").value;
  runTheList();
  getUserList().then(userArray => createArtistDOM(userArray));
}

function returnUserlist(event) {
  let user1 = window.sessionStorage.getItem("uri");
  let user2 = document.querySelector("#selectUser").value;
  if (user1 === user2) {
    alert("You can't select yourself dummy.")
  } else {
  getShared(user1, user2);

  }
}

//for playlist button

// const playlistImporter = () => {
// let user1 = window.sessionStorage.getItem("uri");
// let playlistID = window.sessionStorage.getItem("playlist");
//   let loadPlaylist = `<iframe src="https://open.spotify.com/embed/user/${user1}/playlist/${playlistID}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
//   playlistButton.insertAdjacentHTML("afterend", loadPlaylist)
// }

function loadPlaylist(event) {
  let user1 = window.sessionStorage.getItem("uri");
let playlistName = document.querySelector("#playlist-name").value;
if (playlistName.length === 0) {
createNewPlaylist(user1, "New Playlist");
} else {
  createNewPlaylist(user1, playlistName);
}
}

document.addEventListener("click", function(event) {
  if (!event.target.classList.contains("accordion-toggle")) return;
  const content = document.querySelector(event.target.hash);
  if (!content) return;
  event.preventDefault();
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains("active")) {
    return;
  }
  var accordions = document.querySelectorAll(".accordion-content.active");
  accordions.forEach(function(accordion) {
    accordion.classList.remove("active");
  });
  // Open our content
  content.classList.add("active");
});
