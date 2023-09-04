import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/Auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user  = useSelector(getUserName);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
