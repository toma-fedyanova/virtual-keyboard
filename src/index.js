import { ElementCreator } from './Button';

const body = document.getElementsByTagName('body')[0];
let flag = true;

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
/* const keyboard = document.createElement('section');
keyboard.className = 'keyboard'; */
body.append(keyboard);

// add information
const info = document.createElement('section');
info.className = 'info';
const p1 = document.createElement('p');
p1.textContent = 'Клавиатура создана в операционной системе Windows';
info.append(p1);
const p2 = document.createElement('p');
p2.textContent = 'Для переключения языка комбинация: левый ctrl + alt';
info.append(p2);
body.append(info);

// add functions for get values for buttons
async function getValuesRu(num) {
  const values = '../valuesButton.json';
  const res = await fetch(values);
  const data = await res.json();
  this.textContent = data['valuesButton'][num]['content'];
  this.id = data['valuesButton'][num]['id'];
  this.className = data['valuesButton'][num]['class'];
}
async function getValuesRuUpperCase(num) {
  const values = '../valuesButton.json';
  const res = await fetch(values);
  const data = await res.json();
  this.textContent = data['valuesButton'][num]['contentAdd'];
  this.id = data['valuesButton'][num]['id'];
  this.className = data['valuesButton'][num]['class'];
}
async function getValuesEn(num) {
  const values = '../valuesButton.json';
  const res = await fetch(values);
  const data = await res.json();
  this.textContent = data['valuesButton'][num]['contentEn'];
  this.id = data['valuesButton'][num]['id'];
  this.className = data['valuesButton'][num]['class'];
}
async function getValuesEnUpperCase(num) {
  const values = '../valuesButton.json';
  const res = await fetch(values);
  const data = await res.json();
  this.textContent = data['valuesButton'][num]['contentAddEn'];
  this.className = data['valuesButton'][num]['class'];
  this.id = data['valuesButton'][num]['id'];
  this.dataset.num = data['valuesButton'][num]['data-num'];
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
    btn.addEventListener('mousedown', hoverButton);
    btn.addEventListener('mouseup', removeHover);
    div.append(btn);
  }
  keyboard.append(div);
}

// print text with click keyboard virtual
function printClickedButtonText(data) {
  textarea.value += data.textContent;
}
document.getElementsByClassName('keyboard')[0].addEventListener('click', function addVirtualText(event) {
  const target = event.target.closest('button.button_light');
  if (target) printClickedButtonText(target);
});

// print text with click keyboard
const key = document.getElementsByClassName('keyboard')[0];
textarea.addEventListener('keypress', function(event) {
  let buttons = key.getElementsByTagName('button');
  console.log(event.which);
  for (let button of buttons) {
    if (event.which === button.dataset.num) {
      printClickedButtonText(button);
    }
  }
});

// load window
window.addEventListener('load', function getLoad() {
  // render buttons
  renderKeyboardButtons(1, 14);
  renderKeyboardButtons(14, 29);
  renderKeyboardButtons(29, 42);
  renderKeyboardButtons(42, 55);
  renderKeyboardButtons(55, 65);

  textarea.focus();
});
