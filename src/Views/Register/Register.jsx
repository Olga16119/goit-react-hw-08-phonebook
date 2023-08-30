import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Register/authOperations'
import css from '../Page.module.css'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: name, value }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return(
  <div>
    <p>REGISTER PAGE</p>
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <label> name
        <input type="text" name="name" onChange={handleChange}/>
       
      </label>
      <label>email
        <input type="email" name="email"onChange={handleChange} />
        
      </label>
      <label> passw
        <input type="password" name="password" onChange={handleChange}/>
       
        </label>
        <button className={css.formBtn} type='submit' onClick={handleSubmit}>Singup</button>
    </form>
  </div>)
};

export default Register