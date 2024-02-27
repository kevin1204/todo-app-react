import './Header.scss'
import { FaTasks } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <div className='title'><FaTasks />Todo App</div>
      <div className='author'>by Kevin Ortega</div>
    </header>
  );
}

export default Header;
