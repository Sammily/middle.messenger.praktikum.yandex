import { Block } from 'core/Block';

const regExpForEmail = /^[A-Z0-9-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regExpForName = /^[A-ZА-Я]{1}[a-zа-я-]{2,30}$/;
const regExpForPhone = /^[0-9+]{1}[0-9]{9,14}$/;
const regExpForPassword = /^((?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{8,40})$/;
const regExpForLogin = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;

export function inputValidation(elem: Block, input: Element, result: boolean, inputValue: string) {
    console.log(inputValue);
    if (!result && inputValue !== '') {
        elem.setProps({ error: 'Error', value: inputValue});
        (input as HTMLInputElement).style.color = "#FF2F2F";
    }
    if (result) {
        elem.setProps({error: '', value: inputValue});
    }
}

export function validation(elem: any, inputName: string) {
    const input = elem.element!.children[1] ;
    const inputValue = (elem.element!.children[1] as HTMLInputElement).value;
    let result = regExpForLogin.test(inputValue);
    console.log(inputValue);
    console.log(result);
    if (inputName = 'login') {
        result = regExpForLogin.test(inputValue);
    }
    if (inputName = 'password') {
        result = regExpForPassword.test(inputValue);
    }
    if (inputName = 'phone') {
        result = regExpForPhone.test(inputValue);
    }
    if (inputName = 'name') {
        result = regExpForName.test(inputValue);
    }
    if (inputName = 'email') {
        result = regExpForEmail.test(inputValue);
    }
    inputValidation(elem, input, result, inputValue);
}
