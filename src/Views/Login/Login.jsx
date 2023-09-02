
import LoginForm from "components/LoginForm/LoginForm";
import css from '../Views.module.css'

const Login = () => { 
  return (<div className={css.login}>
    <h1>LOGIN PAGE</h1>
    <LoginForm/>
  </div>)
}


export default Login;
