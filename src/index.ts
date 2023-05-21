import {LoginPage} from './components/LoginPage';

window.addEventListener('DOMContentLoaded', () => {
    function render(query: string, block: LoginPage) {
        const root = document.querySelector(query);
        root!.appendChild(block.getContent());
        return root;
      }
      
      const loginPage = new LoginPage({
        text: "Some text",
          settings: {withInternalID: true},
      });
    
      render(".app", loginPage);
});