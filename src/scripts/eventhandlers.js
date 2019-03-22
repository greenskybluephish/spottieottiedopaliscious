function handleClick(event) {
   const userName = document.querySelector("#userName").value;
  runTheList();
  getUserList()
  .then(userArray => createArtistDOM(userArray));

}

function returnUserlist(event) {
  let userName = document.querySelector("#selectUser").value;
  while (artistContainer.firstChild) {
    artistContainer.removeChild(artistContainer.firstChild);
  }
  eachObject = getJSONList()
    .then(array => findEachUserList(array, userName))
    .then(userArray => createArtistDOM(userArray));
}

//for playlist button

// const playlistImporter =
//   '<iframe src="https://open.spotify.com/embed/user/8ccdg6p1majd03xmpv0f5z1vl/playlist/3strS5xAxQV0wwSX3MV6Mf" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';

// function loadPlaylist(event) {
//    setTimeout(function () {
//      playlistButton.insertAdjacentHTML("afterend", playlistImporter)
//    }, 2000);
// }

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
