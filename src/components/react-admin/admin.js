import { Admin, Resource } from 'react-admin';
//Para php crud api
//import jsonServerProvider from 'ra-data-json-server';
//Para Laravel Controllers 
import jsonapiClient from 'ra-jsonapi-client';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login';
import { useState } from 'react';

import { UserList } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
import { RutinaList, RutinaEdit, RutinaCreate } from 'components/react-admin/rutinas';
import { EjercicioList, EjercicioEdit, EjercicioCreate } from 'components/react-admin/ejercicios';
import { LugarList, LugarEdit, LugarCreate } from 'components/react-admin/lugares';
import { EntrenadorList, EntrenadorShow, EntrenadorEdit, EntrenadorCreate } from 'components/react-admin/entrenadores';
import { RecipeList } from 'components/react-admin/recipes';
import { TvshowsList, TvshowsShow, TvshowsEdit, TvshowsCreate } from 'components/react-admin/tvshows'
import { EpisodesList, EpisodesShow, EpisodesEdit, EpisodesCreate } from 'components/react-admin/episodes'

import CustomerIcon from '@mui/icons-material/SupportAgent';
import RutinaIcon from '@mui/icons-material/PunchClock'
import UserIcon from '@mui/icons-material/Group';
import RecipeIcon from '@mui/icons-material/LocalDining';
import EjercicioIcon from '@mui/icons-material/FitnessCenter';
import LugarIcon from '@mui/icons-material/Place';
import EntrenadorIcon from '@mui/icons-material/Person';
import TvshowsIcon from '@mui/icons-material/Tv';

//import { AdminLayout } from 'components/react-admin/adminLayout';

//Para php crud api
//const dataProvider = jsonServerProvider('http://encuentro.test/api/records');

//Para Laravel Controllers
//const dataProvider = jsonapiClient('http://encuentro.test/api');

const RAdmin = () => {
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }
  const myLogin = <Login handleDataProvider={handleDataProvider} />

  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)

  if (!dataProvider) {
    // handleDataProvider(jsonapiClient(API_URL))
    let auth = JSON.parse(localStorage.getItem('auth'))
    let settings = {}
    if (auth) {
      settings = {
        headers: {
          Authorization: `${auth.token_type} ${auth.access_token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    }
    handleDataProvider(jsonapiClient(API_URL, settings))
  }

  return (
    <Admin
      basename="/dashboard"
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      loginPage={myLogin}
    >
      <Resource name="recipes" list={RecipeList} icon={RecipeIcon} />

      <Resource name="lugares"
        list={LugarList} icon={LugarIcon} edit={LugarEdit} create={LugarCreate} />

      <Resource name="entrenadores"
        list={EntrenadorList} icon={EntrenadorIcon} show={EntrenadorShow}
        edit={EntrenadorEdit} create={EntrenadorCreate} />

      <Resource name="ejercicios"
        list={EjercicioList} icon={EjercicioIcon} edit={EjercicioEdit} create={EjercicioCreate} />

      <Resource name="rutinas"
        list={RutinaList} icon={RutinaIcon} edit={RutinaEdit} create={RutinaCreate} />

      <Resource name="users" list={UserList} icon={UserIcon} />

      <Resource name="customers"
        list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />

      <Resource name="tvshows"
        list={TvshowsList} icon={TvshowsIcon} show={TvshowsShow}
        edit={TvshowsEdit} create={TvshowsCreate}/>

      <Resource name="episodes"
        list={EpisodesList} icon={TvshowsIcon} show={EpisodesShow}
        edit={EpisodesEdit} create={EpisodesCreate}/>
    </Admin>
  )
}

export default RAdmin;
