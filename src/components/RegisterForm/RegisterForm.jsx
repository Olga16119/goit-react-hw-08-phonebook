import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import css from './RegisterForm.module.css';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Register from 'Views/Register/Register';
import { ToastContainer } from 'react-toastify';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    dispatch(register(user));
    <PublicRoute redirectTo="/contacts" component={<Register />} />;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <input type="text" name="name" />
          Name
        </label>
        <label>
          <input type="email" name="email" />
          Email{' '}
        </label>
        <label>
          <input type="password" name="password" />
          Password
        </label>
        <button className={css.singupBtn} type="submit">
          Singup
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default RegisterForm;
