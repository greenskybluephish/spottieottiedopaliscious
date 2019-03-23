function handleClick(event) {
   const userName = document.querySelector("#userName").value;
  runTheList();
  getUserList()
  .then(userArray => createArtistDOM(userArray));

}

function returnUserlist(event) {
  
  // while (sharedContainer.firstChild) {
  //   sharedContainer.removeChild(sharedContainer.firstChild);
  // }
  let user1 = window.sessionStorage.getItem("uri");
  let user2 = document.querySelector("#selectUser").value;
  getShared(user1, user2);
  let userName = document.querySelector("#selectUser").value;
  eachObject = getJSONList()
    .then(array => findEachUserList(array, userName))
    .then(userArray => createSharedArtistDOM(userArray));

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
