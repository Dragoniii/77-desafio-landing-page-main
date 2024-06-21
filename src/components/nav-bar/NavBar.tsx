import { Link } from 'react-router-dom';
import NavBarStyled from './NavBarStyled';
import navigation from '../../config/navigation';

function NavBar() {
  return (
    <NavBarStyled>
      {navigation.map(item => (
        <div>
          <Link to={item.url}>{item.label}</Link>
        </div>
      ))}
    </NavBarStyled>
  );
}

export default NavBar;
