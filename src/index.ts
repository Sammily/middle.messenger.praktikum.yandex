import { validateForms } from './utils/validation';
import {LoginPage} from './pages/LoginPage';
import { Profile } from './pages/Profile';

window.addEventListener('DOMContentLoaded', () => {
    function render(query: string, block: LoginPage) {
        const root = document.querySelector(query);
        root!.appendChild(block.getContent());
        return root;
    }

    const loginPage = new Profile({});
        
    render(".app", loginPage);
    validateForms();
});
