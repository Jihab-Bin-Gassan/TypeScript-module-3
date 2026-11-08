class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}"/>`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    // you can keep it. or you can remove it as your wish. But removing is the easiest way.
    // constructor(id: string) {
    //   super(id)
    // }
    render() {
        // console.log(this.children);
        const childrenHTML = this.children.map(child => child.render()).join('\n ');
        // console.log(childrenHTML);
        return `<form style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; max-width:300px; border-radius: 10px; gap:5px" id=${this.id}>\n ${childrenHTML} \n</form>`;
    }
}
const formElement = new Form('login-form');
const nameInput = new Input('name', 'text', 'Enter your name');
const emailInput = new Input('email', 'email', 'email');
const passwordInput = new Input('pass', 'password', 'Enter your password');
const submitButton = new Button('submit-btn', 'Submit');
formElement.appendChild(nameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passwordInput);
formElement.appendChild(submitButton);
console.log(formElement.render());
// console.log(emailInput.render());
// console.log(passwordInput.render());
// console.log(submitButton.render());
const rootElement = document.getElementById('root');
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
