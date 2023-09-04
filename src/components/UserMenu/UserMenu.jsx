import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/Auth/authOperations';
import css from '../AppBar/AppBar.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <div className={css.userMenu}>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
