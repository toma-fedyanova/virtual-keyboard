import { ElementCreator } from './Button';

const body = document.getElementsByTagName('body')[0];
let flag = true;
let choice = false;

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
  text: 'Для переключения языка комбинация: левый ctrl + alt',
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

// render Buttons accoding language
function renderKeyboardButtons(start, length) {
  const div = document.createElement('div');
  div.className = 'keybourd__row';
  for (let i = start; i < length; i += 1) {
    const btn = document.createElement('button');
    if (flag === true) {
      getValuesRu.call(btn, i);
    } else {
      getValuesEn.call(btn, i);
    }
    div.append(btn);
  }
  keyboard.append(div);
}

// print text with click keyboard
function printClickedButtonText(data) {
  textarea.value += data.textContent;
}
// mouse event
let element = document.getElementsByClassName('keyboard')[0];
element.addEventListener('mousedown', function addVirtualText(event) {
  let target = event.target.closest('button.button-square');
  let num = event.code;
  console.log(num);
  if (event.code === 'CapsLock') {
    console.log('capslock down');
    if (!choice) {
      hoverButton.call(buttons[29]);
      choice = true;
      changeToUpperCase();
    } else {
      choice = false;
      removeHover.call(buttons[29]);
      changeToLowerCase();
    }
  } else if (target) {
    printClickedButtonText(target);
    hoverButton.call(target);
  }
});
element.addEventListener('mouseup', function addVirtualText(event) {
  let target = event.target.closest('button.button-square');
  if (event.code === 'CapsLock') console.log('capslock mouseup');
  else if (target) target.classList.remove('colored');
});

// keyboard event
let buttons = document.getElementsByTagName('button');
body.addEventListener('keydown', function keyboardListener(event) {
  event.preventDefault();
  let num = event.which;
  for (let button of buttons) {
    if (num === Number(button.getAttribute('data-num'))) {
      printClickedButtonText(button);
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
  }
  if (event.ctrlKey && event.altKey) {
    if (flag) flag = false;
    else flag = true;
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
});

// change letter to UpperCase
function changeToUpperCase() {
  for (let i = 0; i < buttons.length; i += 1) {
    if ((flag === true) && (choice === true)) {
      getValuesRuUpperCase.call(buttons[i]);
    } else if ((flag === false) && (choice === true)) {
      getValuesEnUpperCase.call(buttons[i]);
    }
  }
}
// change letter to lowerCase
function changeToLowerCase() {
  for (let i = 0; i < buttons.length; i += 1) {
    if ((flag === true) && (choice === false)) {
      getValuesRuLowerCase.call(buttons[i]);
    } else if ((flag === false) && (choice === false)) {
      getValuesEnLowerCase.call(buttons[i]);
    }
  }
}

// load window
window.addEventListener('load', function getLoad() {
  // render buttons
  renderKeyboardButtons(0, 14);
  renderKeyboardButtons(14, 29);
  renderKeyboardButtons(29, 42);
  renderKeyboardButtons(42, 55);
  renderKeyboardButtons(55, 65);
  if (choice) hoverButton.call(buttons[29]);
  textarea.focus();
});
