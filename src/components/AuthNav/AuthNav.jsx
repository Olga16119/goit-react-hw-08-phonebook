const { NavLink } = require('react-router-dom');

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">REGISTER</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
    </div>
  );
};

export default AuthNav
