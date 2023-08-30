import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Register/authOperations';
import css from '../Page.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: name, value }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <p>LOGIN PAGE</p>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label>
          email
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          passw
          <input type="password" name="password" />
        </label>
        <button className={css.formBtn} type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
