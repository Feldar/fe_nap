import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import RAdmin from 'components/react-admin/admin';
import Login from 'pages/login';
import Register from 'pages/register';
import HomePage from 'pages/home-page';
import TvshowDetails from 'pages/TvshowDetails/TvshowDetails';
import Tvshows from 'components/Tvshows/Tvshows';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
import Header from 'components/Landing/Header/header';

function App() {

  return (
    <div className="antialiased">
      <Header />
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
        <Route path="*" element={<NotFoundPage/>}
        />
      </Routes>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
    </div>
  );
}

export default App;
