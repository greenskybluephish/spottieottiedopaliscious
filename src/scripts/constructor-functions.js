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

const buildInputButtonElement = (elementType, elementId) => {
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
};

const buildOptionElement = (value, text) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
};

const emptyField = (element) => {
  if (element.childNodes[1]) {
element.removeChild(element.childNodes[1])
  }
}