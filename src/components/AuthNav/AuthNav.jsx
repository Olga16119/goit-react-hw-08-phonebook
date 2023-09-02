import css from '../AppBar/AppBar.module.css'
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={css.navLink}>REGISTER</NavLink>
      <NavLink to="/login" className={css.navLink}>LOGIN</NavLink>
    </div>
  );
};

export default AuthNav;
