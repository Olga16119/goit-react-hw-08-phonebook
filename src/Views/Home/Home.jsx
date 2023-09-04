import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'redux/selectors';
import css from '../Views.module.css';

const Home = () => {
  const isToken = useSelector(getToken);
  const navigate = useNavigate();
  const startButton = () => {
    isToken ? navigate('/contacts') : navigate('/login');
  };
  return (
    <div className={css.home}>
      <h1>HOME PAGE</h1>
      <button type="button" onClick={startButton}>
        START
      </button>
    </div>
  );
};

export default Home;
