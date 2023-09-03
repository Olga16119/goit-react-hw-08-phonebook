import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    try {
      dispatch(register(user));
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
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
      </form>
    </div>
  );
};

export default RegisterForm;
