const playlistContainer = document.querySelector("#playlist-container");
const userlistContainer = document.querySelector("#userlist-container");


const buildElementWithText = (elementType, elementTextContent) => {
  let htmlElement = document.createElement(elementType);
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

const buildInputElement = (elementType, elementId) => {
  let htmlElement = document.createElement("input");
  htmlElement.type = elementType;
  htmlElement.id = elementId;
  return htmlElement;
};

const buildButtonElement = (elementId, elementText, elementClass) => {
  let button = document.createElement("button");
  button.id = elementId;
  button.setAttribute("type", "submit");
  button.textContent = elementText;
  button.classList.add(elementClass);
  return button;
}

const buildAndAppendForm = () => {
  let formSection = document.createElement("section");
  formSection.id = "form-container";
  let formFieldSet = (buildElementWithText("fieldset"));
  formFieldSet.appendChild(buildElementWithText("label", "Enter your name "));
  formFieldSet.appendChild(buildInputElement("text", "userName"));
  let createButton = buildElementWithText("button", "Submit")
  createButton.id = "button2";
  formFieldSet.appendChild(createButton);
  formSection.appendChild(formFieldSet);
  userlistContainer.appendChild(formSection);
}

const removeSubmitForm = () => {
  playlistContainer.removeChild(playlistContainer.childNodes[2])
}

const buildOptionElement = (value, text) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
};

// const emptyField = (element) => {
//   while (element.childNodes)
// element.removeChild(element.childNodes[0])
// }


const createSelectElement = () =>
  findAllUsers().then(array => {
    const formFieldSet = (buildElementWithText("fieldset"));
    formFieldSet.appendChild(buildElementWithText("label", "Users:"));
    const formSelect = (buildElementWithText("select"));
    formSelect.id = "selectUser"
    array.forEach(name => {
      formSelect.appendChild(buildOptionElement(name, name));
    });
    formFieldSet.appendChild(formSelect);
    playlistContainer.appendChild(formFieldSet);
  })


const userListDOM = (userArray) => {
  const list = buildElementWithText('ol', 'Users:');
  userArray.forEach(element => {
    let listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(element));
    list.appendChild(listItem);
  });
  playlistContainer.appendChild(list)
}



// const findButton = () => {
//     findAllUsers().then(userArray => {
//         const list = buildElementWithText('ol', 'Users:');
//         userArray.forEach(element => {
//           let listItem = document.createElement('li')
//           listItem.appendChild(document.createTextNode(element));
//           list.appendChild(listItem);
//         });
//         playlistContainer.appendChild(list)
//       })
//     }