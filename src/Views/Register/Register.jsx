import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from '../Views.module.css'

const Register = () => {
  return (
    <div className={css.register}>
      <h2>REGISTER PAGE</h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
