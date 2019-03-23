const playlistContainer = document.querySelector("#playlist-container");
const userlistContainer = document.querySelector("#userlist-container");
const artistContainer = document.querySelector("#artist-container");
const sharedContainer = document.querySelector("#shared-container");

const buildAndAppendForm = () => {

  let formFieldSet = buildElementWithText("fieldset");
  formFieldSet.appendChild(buildElementWithText("label", "Enter your name "));
  formFieldSet.appendChild(buildInputElement("text", "userName"));
  let createButton = buildElementWithText("button", "Submit");
  createButton.id = "button2";
  createButton.addEventListener("click", handleClick);
  formFieldSet.appendChild(createButton);
  userlistContainer.appendChild(formFieldSet);
  userlistContainer.classList.add("active");
};

const createSelectElement = () =>
  findAllUsers().then(array => {
    const formFieldSet = buildElementWithText("fieldset");
    formFieldSet.appendChild(buildElementWithText("label", "Users:"));
    const formSelect = buildElementWithText("select");
    formSelect.id = "selectUser";
    array.forEach(name => {
      formSelect.appendChild(buildOptionElement(name, name));
    });
    formFieldSet.appendChild(formSelect);
    const userlistButton = buildButtonElement(
      "userlist-button",
      "Search for list:",
      "one"
    );
    userlistButton.addEventListener("click", returnUserlist);
    formFieldSet.appendChild(userlistButton);
    sharedContainer.appendChild(formFieldSet);
  });

const createArtistDOM = (array) => {
  let arrayObject = array.items;
  const list = document.createElement("ol");
  arrayObject.forEach(index => {
    let imageBox = document.createElement("figure");
    let caption = buildElementWithText("figcaption", index.name);
    caption.classList.add("currentUser");
    const smallImage = new Image();
    smallImage.src = index.images[1].url;
    imageBox.appendChild(caption);
    imageBox.appendChild(smallImage);
    list.appendChild(imageBox);
  });
  artistContainer.appendChild(list);
  artistContainer.classList.add("active");
  return artistContainer;
};

const createSharedArtistDOM = (array) => {
  let arrayObject = array.items;
  const list = document.createElement("ol");
  arrayObject.forEach(index => {
    let imageBox = document.createElement("figure");
    let caption = buildElementWithText("figcaption", index.name);
    caption.classList.add("sharedUser");
    const smallImage = new Image();
    smallImage.src = index.images[1].url;
    imageBox.appendChild(caption);
    imageBox.appendChild(smallImage);
    list.appendChild(imageBox);
  });
  sharedContainer.appendChild(list);
  sharedContainer.classList.add("active");
  return sharedContainer;
};

const createPlaylistDOM = (object) => {
  let array = object.artists;
  const list = document.createElement("ol");
  array.forEach(index => {
    let imageBox = document.createElement("figure");
    let caption = buildElementWithText("figcaption", index.name);
    caption.classList.add("sharedArtists");
    const smallImage = new Image();
    smallImage.src = index.images[1].url;
    imageBox.appendChild(caption);
    imageBox.appendChild(smallImage);
    list.appendChild(imageBox);
  });
  playlistContainer.appendChild(list);
  return playlistContainer;
};



const runTheList = () =>
  findAllUsers().then(userArray => {
    const userNameValue = document.querySelector("#userName").value;
    if (userArray.includes(userNameValue)) {
      alert("Username is taken, please select another.");
    } else {
      getUserList()
        .then(nameUserList)
        .then(postUserList)
        .then(createSelectElement)
    }
  });

const checkAPIforUser = () => getUserInfo();
findAllURI().then(uriArray => {
  let sessionURI = window.sessionStorage.getItem("uri");
  if (uriArray.includes(sessionURI)) {
    createSelectElement();
    getJSONList()
      .then(array => findEachURIList(array, sessionURI))
      .then(userArray => createArtistDOM(userArray));
  } else {
    buildAndAppendForm();
  }
});

