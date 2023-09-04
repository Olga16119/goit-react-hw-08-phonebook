import LoginForm from 'components/LoginForm/LoginForm';
import css from '../Views.module.css';

const Login = () => {
  return (
    <div className={css.login}>
      <h2>LOGIN PAGE</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
