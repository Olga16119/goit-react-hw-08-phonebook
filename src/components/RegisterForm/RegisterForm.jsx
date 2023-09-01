import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const user = {
      name: form.name.value,
      emeail: form.email.value,
      password: form.password.value,
    }
    try {
      dispatch(register(user));
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Singup</button>
      </form>
    </div>
  );
};

export default RegisterForm;
