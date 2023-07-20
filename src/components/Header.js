import GoBack from '../assets/images/GoBack.png';
import Mic from '../assets/images/Mic.png';
import Settings from '../assets/images/Settings.png';

const Header = () => (
  <header>
    <nav>
      <button type="button" className="navigation-icons"><img src={GoBack} alt="Go back" /></button>
      <h1><a href="https://www.google.com/">Header</a></h1>
      <div>
        <button type="button" className="navigation-icons"><img src={Mic} alt="Mic" /></button>
        <button type="button" className="navigation-icons"><img src={Settings} alt="Settings" /></button>
      </div>
    </nav>
  </header>
);
export default Header;
