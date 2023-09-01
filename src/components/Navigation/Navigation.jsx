import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink to="/contacts">CONTACTS</NavLink>
      ) : (
        <NavLink to="/">HOME</NavLink>
      )}
    </nav>
  );
};

export default Navigation;
