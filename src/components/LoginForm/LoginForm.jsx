import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authOperations';
import css from './LoginForm.module.css';
import PublicRoute from 'components/PrivateRoute/PrivateRoute';
import Login from 'Views/Login/Login';
import { ToastContainer} from 'react-toastify';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };

    dispatch(login(user));
    <PublicRoute redirectTo="/contacts" component={<Login />} />;
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
      <label>
        <input type="email" name="email" />
        Email
      </label>
      <label>
        <input type="password" name="password" />
        Password
      </label>
      <button className={css.loginBtn} type="submit">
        Login
      </button>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
