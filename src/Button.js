/* eslint-disable */
export class ElementCreator {
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