import {LoginPage} from './pages/LoginPage';
import { Profile } from './pages/Profile';
import renderDOM from './core/renderDOM';
import { AllPages } from './components/nav';
import { Modal } from './components/Modal';
import { EditProfile } from './pages/EditProfile';
import { EditPassword } from './pages/EditPassword';
import { Registration } from './pages/Registration';
import { Error400 } from './pages/Page400';
import { Error500 } from './pages/Page500';
import { AddDeleteUserPanel } from './components/AddDeleteUserPanel';
import { Chat } from './pages/Chat';
import { ChatActive } from './pages/ChatActive';

window.addEventListener('DOMContentLoaded', () => {
    const pages = [
        { link: '/profile', label: "profile" },
        { link: '/login', label: 'login' },
        { link: '/modal', label: 'modal' },
        { link: '/edit-profile', label: 'editProfile' },
        { link: '/edit-password', label: 'editPassword' },
        { link: '/registration', label: 'registration' },
        { link: '/error400', label: 'error400' },
        { link: '/error500', label: 'error500' },
        { link: '/addDeleteUser', label: 'addDeleteUser' },
        { link: '/chat', label: 'chat' },
        { link: '/chatActive', label: 'chatActive' }
    ]
    const loginPage = new LoginPage({});
    const profilePage = new Profile({});
    const modal = new Modal({});
    const editProfile = new EditProfile({});
    const editPassword = new EditPassword({});
    const registration = new Registration({});
    const error400 = new Error400({});
    const error500 = new Error500({});
    const addDeleteUser = new AddDeleteUserPanel({});
    const chat = new Chat({});
    const chatActive = new ChatActive({});

    const allPages = new AllPages({pages});
        
    renderDOM(allPages, "#navigation");

    switch (window.location.pathname) {
        case "/profile":
            renderDOM(profilePage);
            break;
        case "/login":
            renderDOM(loginPage);
            break;
        case "/modal":
            renderDOM(modal);
            break;
        case "/edit-profile":
            renderDOM(editProfile);
            break;
        case "/edit-password":
            renderDOM(editPassword);
            break;
        case "/registration":
            renderDOM(registration);
            break;
        case "/error400":
            renderDOM(error400);
            break;
        case "/error500":
            renderDOM(error500);
            break;
        case "/addDeleteUser":
            renderDOM(addDeleteUser);
            break;
        case "/chat":
            renderDOM(chat);
            break;
        case "/chatActive":
            renderDOM(chatActive);
            break;
        
    }
});
