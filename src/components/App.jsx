import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/Auth/authOperations';
import { getIsRefreshing } from 'redux/selectors';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const Home = lazy(() => import('../Views/Home/Home'));
const Register = lazy(() => import('../Views/Register/Register'));
const Login = lazy(() => import('../Views/Login/Login'));
const Contacts = lazy(() => import('../Views/Contacts/Contacts'));

const App = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<PublicRoute />} />
    </Routes>
  );
};

export default App;
