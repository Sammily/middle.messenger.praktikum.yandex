export function validateForms() {
    const form = document.getElementById('form');
    const inputs = document.querySelectorAll('.input');
    const errorLabels = document.querySelectorAll('.error');

    const regExpForEmail = /^[A-Z0-9-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const regExpForName = /^[A-ZА-Я]{1}[a-zа-я-]{2,30}$/;
    const regExpForPhone = /^[0-9+]{1}[0-9]{9,14}$/;
    const regExpForPassword = /^((?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{8,40})$/;
    const regExpForLogin = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
    
    function validateInputs(inputValue: string) {
        return regExpForLogin.test(inputValue), regExpForPassword.test(inputValue), regExpForEmail.test(inputValue), regExpForName.test(inputValue), regExpForPhone.test(inputValue);
    }
    function validateInput(inputValue: string) {
        return validateInputs(inputValue);
    }

    for (let i = 0; i < inputs.length; i += 1) {
        const result = validateInput((inputs[i] as HTMLInputElement).value);
        const elem = inputs[i] as HTMLInputElement;
        console.log(result);
        console.log(elem.parentElement);

        elem.addEventListener("focus", (e) => {
            const result = validateInput((inputs[i] as HTMLInputElement).value);
            if (!result && elem.value !== '') {
                (e.target as HTMLInputElement).style.color = "#FF2F2F";
                (errorLabels[i] as HTMLInputElement).style.visibility = "visible";
            }
        });

        elem.addEventListener("blur", (e) => {
            const result = validateInput((inputs[i] as HTMLInputElement).value);
            if (result && elem.value !== '') {
                (e.target as HTMLInputElement).style.color = "#1E1E1E";
                (errorLabels[i] as HTMLInputElement).style.visibility = "hidden";
            } if (!result && elem.value !== '') {
                (e.target as HTMLInputElement).style.color = "#FF2F2F";
                (errorLabels[i] as HTMLInputElement).style.visibility = "visible";
            }
        });
    }

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        for (let i = 0; i < inputs.length; i += 1) {
            const result = validateInput((inputs[i] as HTMLInputElement).value);
            const elem = inputs[i] as HTMLInputElement;

            if (!result && elem.value !== '') {
                (e.target as HTMLInputElement).style.color = "#FF2F2F";
                (errorLabels[i] as HTMLInputElement).style.visibility = "visible";
            }
    
            if (result && elem.value !== '') {
                (e.target as HTMLInputElement).style.color = "#1E1E1E";
                (errorLabels[i] as HTMLInputElement).style.visibility = "hidden";
            } if (!result && elem.value !== '') {
                (e.target as HTMLInputElement).style.color = "#FF2F2F";
                (errorLabels[i] as HTMLInputElement).style.visibility = "visible";
            }
        }
    });
}