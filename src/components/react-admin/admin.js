import { Admin, Resource } from 'react-admin';
//Para php crud api
//import jsonServerProvider from 'ra-data-json-server';
//Para Laravel Controllers 
import jsonapiClient from 'ra-jsonapi-client';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { default as Login } from 'pages/login';
import { useState } from 'react';

import { UserList } from 'components/react-admin/users';
import { TvshowsList, TvshowsShow, TvshowsEdit, TvshowsCreate } from 'components/react-admin/tvshows'
import { EpisodesList, EpisodesShow, EpisodesEdit, EpisodesCreate } from 'components/react-admin/episodes'
import { CharactersList, CharactersShow, CharactersEdit, CharactersCreate } from 'components/react-admin/characters'
import { ArtistsList, ArtistsShow, ArtistsEdit, ArtistsCreate } from 'components/react-admin/artists'
import { AlbumsList, AlbumsShow, AlbumsEdit, AlbumsCreate } from 'components/react-admin/albums'
import { SongsList, SongsShow, SongsEdit, SongsCreate } from 'components/react-admin/songs'

import UserIcon from '@mui/icons-material/Group';
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
      <Resource name="tvshows"
        list={TvshowsList} icon={TvshowsIcon} show={TvshowsShow}
        edit={TvshowsEdit} create={TvshowsCreate}/>

      <Resource name="episodes"
        list={EpisodesList} icon={TvshowsIcon} show={EpisodesShow}
        edit={EpisodesEdit} create={EpisodesCreate}/>

      <Resource name="artists"
        list={ArtistsList} icon={TvshowsIcon} show={ArtistsShow}
        edit={ArtistsEdit} create={ArtistsCreate}/>

      <Resource name="characters"
        list={CharactersList} icon={TvshowsIcon} show={CharactersShow}
        edit={CharactersEdit} create={CharactersCreate}/>

      <Resource name="albums"
        list={AlbumsList} icon={TvshowsIcon} show={AlbumsShow}
        edit={AlbumsEdit} create={AlbumsCreate}/>
        
      <Resource name="songs"
        list={SongsList} icon={TvshowsIcon} show={SongsShow}
        edit={SongsEdit} create={SongsCreate}/>

      <Resource name="users" list={UserList} icon={UserIcon} />

    </Admin>
  )
}

export default RAdmin;