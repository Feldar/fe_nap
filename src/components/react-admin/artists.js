import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Show,
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  DateInput,
  DateField,
  SelectInput,
  required,
  NumberInput,
  NumberField
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const artistsFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const ArtistsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={artistsFilters} >
      {isSmall ? (
        <SimpleList

          primaryText={(record) => record.name_rm}
          secondaryText={(record) => record.name_jp}
          tertiaryText={(record) => record.image}
          linkType={(record) => 'edit'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <ImageField source="image" title='title' />
          <TextField source="name_rm" />
          <TextField source="name_jp" />
          <TextField source="profile_page" />
          <TextField source="blog" />
          <TextField source="twitter_account" />
          <TextField source="instagram_account" />
          <TextField source="youtube_account" />
          <DateField source="join_date" />
          <DateField source="graduation_date" />
          <TextField source="status" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const ArtistsTitle = () => {
  const record = useRecordContext();
  return record ? record.name_rm : '';
};

export const ArtistsShow = () => (
  <Show title={<ArtistsTitle />} disableAuthentication>
    <SimpleForm>
      <ImageField source="image" title='title' />
      <TextField source="name_rm" />
      <TextField source="name_jp" />
      <TextField source="profile_page" />
      <TextField source="blog" />
      <TextField source="twitter_account" />
      <TextField source="instagram_account" />
      <TextField source="youtube_account" />
      <DateField source="join_date" />
      <DateField source="graduation_date" />
      <TextField source="status" />
    </SimpleForm>
  </Show>
);

export const ArtistsEdit = () => {
  const initialvaluesinput = {
    file: null,
    filename: '',
    fileURL: ''
  }

  const [file, setFile] = useState(initialvaluesinput);
  const [filePath, setFilepath] = useState(null);
  const [fileName, setFileName] = useState(null);

  const fileSelectHandler = (e) => {
    setFile({
      file: e.target.files[0],
      filename: e.target.files[0].name
    });
  }

  const sendHandler = e => {
    e.preventDefault();

    const formdata = new FormData();

    if (file.file) {

      formdata.append('file', file.file, file.filename);
      axios.post('http://nananijiarchiveproject.test/api/upload', formdata)
        .then(response => {
          setFilepath(response.data)
          setFileName(file.filename)
        }
        )
    }
  }

  return (
    <Edit>
      <SimpleForm>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='image' defaultValue={filePath} disabled validate={required()} />
        {/* ocultar y requerir */}
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="profile_page" validate={required()} />
        <TextInput source="blog" />
        <TextInput source="twitter_account" />
        <TextInput source="tiktok_account" />
        <TextInput source="instagram_account" />
        <TextInput source="youtube_account" />
        <DateInput source="join_date" validate={required()} />
        <DateInput source="graduation_date" />
        <SelectInput source="status" validate={required()} choices={[
          { id: 'Active', name: 'Active' },
          { id: 'Graduated', name: 'Graduated' }
        ]} />
      </SimpleForm>
    </Edit>
  )
};

export const ArtistsCreate = () => {
  const initialvaluesinput = {
    file: null,
    filename: '',
    fileURL: ''
  }

  const [file, setFile] = useState(initialvaluesinput);
  const [filePath, setFilepath] = useState(null);
  const [fileName, setFileName] = useState(null);

  const fileSelectHandler = (e) => {
    setFile({
      file: e.target.files[0],
      filename: e.target.files[0].name
    });
  }

  const sendHandler = e => {
    e.preventDefault();

    const formdata = new FormData();
    const fileblob = `http://nananijiarchiveproject.test/app/fileuploads/${file.name}`

    if (file.file) {
      formdata.append('file', file.file, fileblob, file.filename);
      axios.post('http://nananijiarchiveproject.test/api/upload', formdata)
        .then(response => {
          setFilepath(response.data)
          setFileName(file.filename)
        })
    }
  }

  return (
    <Create>
      <SimpleForm>
        <SimpleForm>
          <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
          <button onClick={sendHandler}>Upload</button>
          {/* ocultar y requerir */}
          <TextInput source='image' defaultValue={filePath} disabled validate={required()} />
          {/* ocultar y requerir */}
          <TextInput source="name_rm" validate={required()} />
          <TextInput source="name_jp" validate={required()} />
          <TextInput source="profile_page" validate={required()} />
          <TextInput source="blog" />
          <TextInput source="twitter_account" />
          <TextInput source="tiktok_account" />
          <TextInput source="instagram_account" />
          <TextInput source="youtube_account" />
          <DateInput source="join_date" validate={required()} />
          <DateInput source="graduation_date" />
          <SelectInput source="status" validate={required()} choices={[
            { id: 'Active', name: 'Active' },
            { id: 'Graduated', name: 'Graduated' }
          ]} />
        </SimpleForm>
      </SimpleForm>
    </Create>
  )
};