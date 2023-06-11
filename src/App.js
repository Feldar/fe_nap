import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';
import Login from 'pages/login';
import NotFoundPage from 'pages/404';
import Register from 'pages/register';
import HomePage from 'pages/home-page';
import Dashboard from 'pages/dashboard';
import PasswordReset from 'pages/password-reset';
import ForgotPassword from 'pages/forgot-password';
import TvshowDetails from 'pages/TvshowDetails/TvshowDetails';

import RAdmin from 'components/react-admin/admin';
import Tvshows from 'components/Tvshows/Tvshows';
import Episodes from 'components/Episodes/Episodes';

function App() {

  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/tvshows/:id" element={<TvshowDetails />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="/pre_dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<RAdmin />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
