// import { Admin, Resource } from 'react-admin';
// //Para php crud api
// //import jsonServerProvider from 'ra-data-json-server';
// //Para Laravel Controllers 
// import jsonapiClient from 'ra-jsonapi-client';
// import { default as AuthProvider } from 'components/react-admin/authProvider';
// import { default as Login } from 'pages/login';
// import { useState } from 'react';
// import axios from 'axios';

// import { UserList } from 'components/react-admin/users';
// import { TvshowsList, TvshowsShow, TvshowsEdit, TvshowsCreate } from 'components/react-admin/tvshows'
// import { EpisodesList, EpisodesShow, EpisodesEdit, EpisodesCreate } from 'components/react-admin/episodes'

// import UserIcon from '@mui/icons-material/Group';
// import TvshowsIcon from '@mui/icons-material/Tv';

// //import { AdminLayout } from 'components/react-admin/adminLayout';

// //Para php crud api
// //const dataProvider = jsonServerProvider('http://encuentro.test/api/records');

// //Para Laravel Controllers
// //const dataProvider = jsonapiClient('http://encuentro.test/api');

// const MyDataProvider = (apiUrl, authSettings) => {
//   const client = jsonapiClient(apiUrl, authSettings);

//   const httpClient = axios.create({
//     baseURL: apiUrl,
//     headers: authSettings.headers
//   });

//   const getList = async (resource, params) => {
//     const { page, perPage } = params.pagination;
//     const { field, order } = params.sort;
//     const query = {
//       ...params.filter,
//       _sort: field,
//       _order: order,
//       _start: (page - 1) * perPage,
//       _limit: perPage
//     };
//     const response = await client.get(`/${resource}`, { params: query });
  
//     if (!response.data || !Array.isArray(response.data)) {
//       throw new Error(`Invalid response format for getList: ${JSON.stringify(response)}`);
//     }
  
//     return {
//       data: response.data.map(item => ({
//         id: item.id,
//         ...item.attributes
//       })),
//       total: response.meta.total
//     };
//   };

//   const uploadFile = async (file, path) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     const response = await client.upload('/upload', formData, { method: 'POST' });
//     return response.data.path; // Assuming the API returns the file path after successful upload
//   };

//   return {
//     ...client,
//     getList,
//     uploadFile
//   };
// };

// const RAdmin = () => {
//   const [dataProvider, setDataProvider] = useState(null);

//   const handleDataProvider = (apiUrl, authSettings) => {
//     const customDataProvider = MyDataProvider(apiUrl, authSettings);
//     console.log(customDataProvider)
//     setDataProvider(customDataProvider);
//   };

//   const myLogin = <Login handleDataProvider={handleDataProvider} />;

//   const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

//   if (!dataProvider) {
//     let auth = JSON.parse(localStorage.getItem('auth'));
//     let settings = {};
//     if (auth) {
//       settings = {
//         headers: {
//           Authorization: `${auth.token_type} ${auth.access_token}`,
//           'X-Requested-With': 'XMLHttpRequest'
//         }
//       };
//     }
//     handleDataProvider(API_URL, settings);
//   }

//   return (
//     <Admin
//       basename="/dashboard"
//       dataProvider={dataProvider}
//       authProvider={AuthProvider}
//       loginPage={myLogin}
//     >
//       <Resource name="tvshows"
//         list={TvshowsList} icon={TvshowsIcon} show={TvshowsShow}
//         edit={TvshowsEdit} create={TvshowsCreate}/>

//       <Resource name="episodes"
//         list={EpisodesList} icon={TvshowsIcon} show={EpisodesShow}
//         edit={EpisodesEdit} create={EpisodesCreate}/>

//       <Resource name="users" list={UserList} icon={UserIcon} />

//     </Admin>
//   )
// }

// export default RAdmin;

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

      <Resource name="users" list={UserList} icon={UserIcon} />

    </Admin>
  )
}

export default RAdmin;