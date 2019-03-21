// retrieve spotify data, label it, send to local server


buildAndAppendForm();


const runTheList = () =>
findAllUsers().then(userArray => {
   const userNameValue = document.querySelector("#userName").value;
   if (userArray.includes(userNameValue)) {
      alert("Please enter a different user name.")
   } else {
      getUserList()
      .then(nameUserList)
      .then(postUserList)
      .then(createSelectElement);
   }});




   
   const button2 = document.querySelector("#button2")

   function handleClick(event) {
      runTheList()
   }
   
   button2.addEventListener('click', handleClick)


const playlist = '<iframe src="https://open.spotify.com/embed/user/8ccdg6p1majd03xmpv0f5z1vl/playlist/3strS5xAxQV0wwSX3MV6Mf" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';



const playlistButton = document.querySelector("#playlist-button");

function handlePlaylist(event) {
   // please();
   // dropdownCreator();
   // setTimeout(function () {
   //   playlistButton.insertAdjacentHTML("afterend", playlist)
   // }, 2000);

   findButton();
}

// function loadPlaylist(event) {
//    setTimeout(function () {
//      playlistButton.insertAdjacentHTML("afterend", playlist)
//    }, 2000);
// }

playlistButton.addEventListener('click', handlePlaylist)

// playlistButton.addEventListener('click', loadPlaylist)




// const runTheList = () =>
//    getUserList()
//    .then(nameUserList)
//    .then(postUserList)
//    .then(aProm);


//    const button2 = document.querySelector("#button2")

//    function handleClick(event) {
//       runTheList()
//    }

//    button2.addEventListener('click', handleClick)