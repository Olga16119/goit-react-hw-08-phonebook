import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authOperations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const user = {
      emeail: form.email.value,
      password: form.password.value,
    };
    dispatch(login(user));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        <input type="email" name="email" />
        Email
      </label>
      <label>
        <input type="password" name="password" />
        Password
      </label>
      <button className={css.loginBtn} type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
