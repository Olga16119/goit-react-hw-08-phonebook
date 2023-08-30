import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../AppBar/AppBar.module.css';
import UserMenu from '../AppBar/UserMenu/UserMenu';

const Layout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <NavLink to="/"></NavLink>
        <NavLink to="/home">HOME </NavLink>
        <NavLink to="/register">REGISTER</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
        <UserMenu />
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
