import { Route, Routes, Navigate } from 'react-router-dom';
import Register from '../../../Views/Register/Register';
import Login from '../../../Views/Login/Login';
import Layout from '../../Layout/Layout';
import Home from 'Views/Home/Home';

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
