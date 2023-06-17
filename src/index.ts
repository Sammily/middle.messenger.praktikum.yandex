import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';
import renderDOM from './core/renderDOM';
import { AllPages } from './components/nav';
import { Modal } from './components/Modal';
import { EditProfile } from './pages/EditProfile';
import EditPassword from './pages/EditPassword';
import { Registration } from './pages/Registration';
import { Error400 } from './pages/Page400';
import { Error500 } from './pages/Page500';
import { AddDeleteUserPanel } from './components/AddDeleteUserPanel';
import { Chat } from './pages/Chat';
import { ChatActive } from './pages/ChatActive';
import Router from './core/Router';
import AuthController from './controllers/AuthController';

window.addEventListener('DOMContentLoaded', async() => {
    const pages = [
        { link: '/settings', label: "profile" },
        { link: '/', label: 'login' },
        { link: '/modal', label: 'modal' },
        { link: '/edit-profile', label: 'editProfile' },
        { link: '/edit-password', label: 'editPassword' },
        { link: '/sign-up', label: 'registration' },
        { link: '/error400', label: 'error400' },
        { link: '/error500', label: 'error500' },
        { link: '/addDeleteUser', label: 'addDeleteUser' },
        { link: '/messenger', label: 'chat' },
        { link: '/chatActive', label: 'chatActive' }
    ]
    const modal = new Modal({});
    const editProfile = new EditProfile({});
    const editPassword = new EditPassword({});
    const error400 = new Error400({});
    const error500 = new Error500({});
    const addDeleteUser = new AddDeleteUserPanel({});
    const chatActive = new ChatActive({});

    Router
        .use('/', LoginPage)
        .use('/settings', Profile)
        .use('/edit-profile', EditProfile)
        .use('/edit-password', EditPassword)
        .use('/sign-up', Registration)
        .use('/messenger', Chat);

    const allPages = new AllPages({pages});
        
    renderDOM(allPages, "#navigation");

    switch (window.location.pathname) {
        case "/modal":
            renderDOM(modal);
            break;
        case "/edit-profile":
            renderDOM(editProfile);
            break;
        case "/edit-password":
            renderDOM(editPassword);
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
        case "/chatActive":
            renderDOM(chatActive);
            break;
    }

    let isProtectedRoute = true;

  switch (window.location.pathname) {
    case '/':
    case '/sign-up':
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go('/settings')
    }
  } catch (e) {
      console.log(e);
    Router.start();

    if (isProtectedRoute) {
      Router.go('/');
    }
  }
});
