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
import EpisodeDetails from 'pages/EpisodeDetails/EpisodeDetails';

import RAdmin from 'components/react-admin/admin';
import Tvshows from 'components/Tvshows/Tvshows';

function App() {

  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/tvshows/:id" element={<TvshowDetails />} />
        <Route path="/tvshows/:id/episodes/:id" element={<EpisodeDetails />} />
        <Route path="/artists" element={<Tvshows />} />
        <Route path="/artists/:id" element={<TvshowDetails />} />
        <Route path="/characters" element={<Tvshows />} />
        <Route path="/characters/:id" element={<TvshowDetails />} />
        <Route path="/albums" element={<Tvshows />} />
        <Route path="/albums/:id" element={<TvshowDetails />} />
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
