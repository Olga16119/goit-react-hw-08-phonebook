import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    dispatch(login({ email: form.email.value, password: form.password.value }));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
