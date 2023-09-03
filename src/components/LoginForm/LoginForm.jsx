import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authOperations';
import css from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget.elements;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };
    try {
      dispatch(login(user));
      navigate('/contacts')
    } catch (error) {
      console.log(error.message)
    }
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
      <button className={css.loginBtn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

