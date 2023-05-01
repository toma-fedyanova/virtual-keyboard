class ElementCreator {
  constructor({elem, className, text}) {
    this.element = elem,
    this.className = className,
    this.text = text
  }
  // div generator
  generateElement() {
    let elem = document.createElement(this.element);
    if (this.className) elem.className = this.className;
    if (this.text) elem.textContent = this.text;
    return elem;
  }
}

const body = document.getElementsByTagName('body')[0];
let flag = 'true';
let choice = false;

// load window
window.addEventListener('load', function getLoad() {
  if (localStorage.getItem('flag')) flag = localStorage.getItem('flag');
  // render buttons
  renderKeyboardButtons(0, 14);
  renderKeyboardButtons(14, 29);
  renderKeyboardButtons(29, 42);
  renderKeyboardButtons(42, 55);
  renderKeyboardButtons(55, 65);
  if (choice) hoverButton.call(buttons[29]);
  textarea.focus();
});
// change language before load in local storage
function saveFlag() {
  localStorage.setItem('flag', flag);
}
window.addEventListener('beforeunload', saveFlag);

// add title
let objectTitle = {
  elem: 'h1',
  text: 'RSS Виртуальная клавиатура',
};
let call1 = new ElementCreator(objectTitle);
let h1 = call1.generateElement();
body.append(h1);

// add input field
const inputField = document.createElement('div');
inputField.style.width = '80%';
inputField.style.margin = '15px auto';
body.append(inputField);

const textarea = document.createElement('textarea');
textarea.rows = '12';
textarea.cols = '50';
textarea.className = 'textarea';
inputField.append(textarea);

// add keyboard
let objectKeyboard = {
  elem: 'section',
  className: 'keyboard',
};
let call2 = new ElementCreator(objectKeyboard);
let keyboard = call2.generateElement();
body.append(keyboard);

// add information
let objectInfo = {
  elem: 'section',
  className: 'info',
};
let call3 = new ElementCreator(objectInfo);
let info = call3.generateElement();
body.append(info);

let objectText1 = {
  elem: 'p',
  text: 'Клавиатура создана в операционной системе Windows',
};
let call4 = new ElementCreator(objectText1);
let p1 = call4.generateElement();
info.append(p1);
let objectText2 = {
  elem: 'p',
  text: 'Для переключения языка комбинация: ctrl + alt',
};
let call5 = new ElementCreator(objectText2);
let p2 = call5.generateElement();
info.append(p2);

// add functions for get values for buttons
async function getValuesRu(num) {
  const values = '../valuesButton.json';
  const res = await fetch(values);
  const data = await res.json();
  this.textContent = data['valuesButton'][num]['content'];
  this.id = data['valuesButton'][num]['id'];
  this.className = data['valuesButton'][num]['class'];
  this.setAttribute('data-num', data['valuesButton'][num]['data-num']);
  this.setAttribute('data-upper', data['valuesButton'][num]['contentAdd']);
  this.setAttribute('data-lower', data['valuesButton'][num]['content']);
}

async function getValuesEn(num) {
  const values = '../valuesButton.json';
  const res = await fetch(values);
  const data = await res.json();
  this.textContent = data['valuesButton'][num]['contentEn'];
  this.id = data['valuesButton'][num]['id'];
  this.className = data['valuesButton'][num]['class'];
  this.setAttribute('data-num', data['valuesButton'][num]['data-num']);
  this.setAttribute('data-upperen', data['valuesButton'][num]['contentAddEn']);
  this.setAttribute('data-loweren', data['valuesButton'][num]['contentEn']);
}

// to upper case
function getValuesRuUpperCase() {
  this.textContent = this.dataset.upper;
}
function getValuesEnUpperCase() {
  this.textContent = this.dataset.upperen;
}
// to lower case
function getValuesRuLowerCase() {
  this.textContent = this.dataset.lower;
}
function getValuesEnLowerCase() {
  this.textContent = this.dataset.loweren;
}
// hover buttons
function hoverButton() {
  this.classList.add('colored');
}
// remove hover
function removeHover() {
  this.classList.remove('colored');
}
// print text with click keyboard
function printClickedButtonText(data) {
  if (textarea.selectionStart !== textarea.value.length) {
    let num = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, textarea.selectionStart) + data.textContent + textarea.value.slice(textarea.selectionEnd);
    textarea.selectionStart = num + 1;
    textarea.selectionEnd = num + 1;
  } else textarea.value += data.textContent;
}
// print space keyboard
function printSpaceButtonText() {
  textarea.value += ' ';
}
// print tab keyboard
function printTabButtonText() {
  textarea.value += '  ';
}
// print arrow top
function printArrowTop() {
  let p = document.createElement('p');
  p.innerHTML = '&#9650;';
  let elem = p.innerHTML;
  textarea.value += elem;
}
// print arrow left
function printArrowLeft() {
  let p = document.createElement('p');
  p.innerHTML = '&#5130;';
  let elem = p.innerHTML;
  textarea.value += elem;
}
// print arrow right
function printArrowRight() {
  let p = document.createElement('p');
  p.innerHTML = '&#5125;';
  let elem = p.innerHTML;
  textarea.value += elem;
}
// print arrow down
function printArrowDown() {
  let p = document.createElement('p');
  p.innerHTML = '&#9660;';
  let elem = p.innerHTML;
  textarea.value += elem;
}
// print backspace keyboard
function deleteLetterBackspace() {
  let num = textarea.selectionStart;
  if ((num !== textarea.value.length) && (num !== 0)) {
    textarea.value = textarea.value.slice(0, num - 1) + textarea.value.slice(num);
    textarea.selectionStart = num - 1;
    textarea.selectionEnd = num - 1;
  } else if ((num === textarea.value.length) && (num !== 0)) textarea.value = textarea.value.slice(0, -1);
}
// print enter keyboard
function getEnter() {
  let position;
  if (textarea.selectionStart !== textarea.value.length) position = textarea.selectionStart;
  textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}\n${textarea.value.slice(textarea.selectionEnd, textarea.value.length)}`;
  if (position) {
    textarea.selectionStart = position;
    textarea.selectionEnd = position;
  }
}
// delete keyboard
function getDelete() {
  if (textarea.selectionStart === textarea.selectionEnd) {
    let number = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd + 1);
    textarea.selectionStart = number;
    textarea.selectionEnd = number;
  }
  textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionEnd);
}
// change letter to UpperCase
function changeToUpperCase() {
  for (let i = 0; i < buttons.length; i += 1) {
    if ((flag === 'true') && (choice === true)) {
      getValuesRuUpperCase.call(buttons[i]);
    } else if ((flag === 'false') && (choice === true)) {
      getValuesEnUpperCase.call(buttons[i]);
    }
  }
}
// change letter to lowerCase
function changeToLowerCase() {
  for (let i = 0; i < buttons.length; i += 1) {
    if ((flag === 'true') && (choice === false)) {
      getValuesRuLowerCase.call(buttons[i]);
    } else if ((flag === 'false') && (choice === false)) {
      getValuesEnLowerCase.call(buttons[i]);
    }
  }
}
// render Buttons accoding language
function renderKeyboardButtons(start, length) {
  const div = document.createElement('div');
  div.className = 'keybourd__row';
  for (let i = start; i < length; i += 1) {
    const btn = document.createElement('button');
    if (flag === 'true') {
      getValuesRu.call(btn, i);
    } else {
      getValuesEn.call(btn, i);
    }
    div.append(btn);
  }
  keyboard.append(div);
}

// mouse event
document.getElementsByClassName('keyboard')[0].addEventListener('mousedown', function addVirtualText(event) {
  let target = event.target.closest('button.button-square');
  let functionulButtons = event.target.closest('button.button_dark');
  if (functionulButtons) {
    hoverButton.call(functionulButtons);
    if (functionulButtons.textContent === 'CapsLock') {
      if (!choice) {
        choice = true;
        changeToUpperCase();
      } else {
        choice = false;
        removeHover.call(buttons[29]);
        changeToLowerCase();
      }
    } else if (functionulButtons.textContent === 'Shift') {
      choice = true;
      changeToUpperCase();
    } else if (functionulButtons.textContent === 'Tab') {
      printTabButtonText();
    } else if (functionulButtons.textContent === 'Backspace') {
      deleteLetterBackspace();
    } else if (functionulButtons.textContent === 'Enter') {
      getEnter();
    } else if (functionulButtons.textContent === 'Del') {
      getDelete();
    } else if (functionulButtons.textContent === 'Win') {
      textarea.textContent += '';
    } else if (functionulButtons.classList.contains('icono-caretUp')) {
      printArrowTop();
    } else if (functionulButtons.classList.contains('icono-caretLeft')) {
      printArrowLeft();
    } else if (functionulButtons.classList.contains('icono-caretDown')) {
      printArrowDown();
    } else if (functionulButtons.classList.contains('icono-caretRight')) {
      printArrowRight();
    }
  } else if (target) {
    printClickedButtonText(target);
    hoverButton.call(target);
  } else if (event.target.closest('button.button-space')) {
    hoverButton.call(event.target.closest('button.button-space'));
    printSpaceButtonText();
  }
});
document.getElementsByClassName('keyboard')[0].addEventListener('mouseup', function addVirtualText(event) {
  let target = event.target.closest('button.button-square');
  let functionulButtons = event.target.closest('button.button_dark');
  if (target) removeHover.call(target);
  else if (event.target.closest('button.button-space')) {
    removeHover.call(event.target.closest('button.button-space'));
  } else if (functionulButtons) {
    if (!(functionulButtons.textContent === 'CapsLock')) {
      removeHover.call(functionulButtons);
    } if (functionulButtons.textContent === 'Shift') {
      choice = false;
      changeToLowerCase();
    }
  }
});

// keyboard event
let buttons = document.getElementsByTagName('button');
body.addEventListener('keydown', function keyboardListener(event) {
  event.preventDefault();
  textarea.focus();
  let num = event.which;
  for (let button of buttons) {
    if (num === Number(button.getAttribute('data-num'))) {
      if (button.classList.contains('button-space')) printSpaceButtonText();
      else if (button.textContent === 'Tab') printTabButtonText();
      else if (button.textContent === 'Backspace') deleteLetterBackspace();
      else if (button.textContent === 'Enter') getEnter();
      else if (button.textContent === 'Del') getDelete();
      else if (button.textContent === 'Win') textarea.textContent += '';
      else if (button.classList.contains('icono-caretUp')) printArrowTop();
      else if (button.classList.contains('icono-caretLeft')) printArrowLeft();
      else if (button.classList.contains('icono-caretDown')) printArrowDown();
      else if (button.classList.contains('icono-caretRight')) printArrowRight();
      else printClickedButtonText(button);
      hoverButton.call(button);
    }
  }
  for (let elem of buttons) {
    if (String(event.code) === elem.getAttribute('data-num')) {
      hoverButton.call(elem);
    };
  }
  if (event.code === 'CapsLock') {
    if (!choice) {
      hoverButton.call(buttons[29]);
      choice = true;
      changeToUpperCase();
    } else {
      choice = false;
      removeHover.call(buttons[29]);
      changeToLowerCase();
    }
  } if (event.shiftKey) {
    choice = true;
    changeToUpperCase();
  }
  if (event.ctrlKey && event.altKey) {
    if (flag === 'true') flag = 'false';
    else flag = 'true';
    keyboard.innerHTML = '';
    renderKeyboardButtons(0, 14);
    renderKeyboardButtons(14, 29);
    renderKeyboardButtons(29, 42);
    renderKeyboardButtons(42, 55);
    renderKeyboardButtons(55, 65);
  }
});

// key up of keyboard
body.addEventListener('keyup', function keyboardUpListener(event) {
  event.preventDefault();
  let num = event.which;
  for (let button of buttons) {
    if (num === Number(button.getAttribute('data-num'))) {
      removeHover.call(button);
    }
  };
  for (let elem of buttons) {
    if (String(event.code) === elem.getAttribute('data-num')) {
      removeHover.call(elem);
    };
  }
  if (event.key === 'Shift') {
    choice = false;
    changeToLowerCase();
  }
});
