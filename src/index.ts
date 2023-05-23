import { validateForms } from './utils/validation';
import {LoginPage} from './pages/LoginPage';

window.addEventListener('DOMContentLoaded', () => {
    function render(query: string, block: LoginPage) {
        const root = document.querySelector(query);
        root!.appendChild(block.getContent());
        return root;
    }

    const loginPage = new LoginPage({});
        
    render(".app", loginPage);
    validateForms();
});
