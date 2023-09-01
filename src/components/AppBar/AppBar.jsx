import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
