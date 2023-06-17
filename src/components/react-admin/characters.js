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
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const characterFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const CharactersList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={characterFilters} >
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
          {/* <FileToObjectField /> */}
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

const CharactersTitle = () => {
  const record = useRecordContext();
  return record ? record.name_rm : '';
};

export const CharactersShow = () => (
  <Show title={<CharactersTitle />} disableAuthentication>
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

export const CharactersEdit = () => {
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
          alert('file uploaded correctly')
          setFilepath(response.data)
          setFileName(file.filename)
        }
        )
    }
  }

  return (
    <Edit >
      <SimpleForm>
        <ReferenceInput source="artist_id" reference="artists"  defaultValue={1}>
          <AutocompleteInput optionText="name_rm" validate={required()} />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='image' defaultValue={filePath} disabled validate={required()} />
        {/* ocultar y requerir */}
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="profile_page" validate={required()} />
        <TextInput source="twitter_account" />
        <TextInput source="youtube_account" />
        <TextInput source="color" validate={required()} />
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

export const CharactersCreate = () => {
  const initialvaluesinput = {
    file: null,
    filename: '',
    fileURL: ''
  }

  const [file, setFile] = useState(initialvaluesinput);
  const [filePath, setFilePath] = useState(null);
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
          setFilePath(response.data)
          setFileName(file.filename)
        }
        )
    }
  }

  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="artist_id" reference="artists"  defaultValue={1}>
          <AutocompleteInput optionText="name_rm" validate={required()} />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='image' defaultValue={filePath} disabled validate={required()} />
        {/* ocultar y requerir */}
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="profile_page" validate={required()} />
        <TextInput source="twitter_account" />
        <TextInput source="youtube_account" />
        <TextInput source="color" validate={required()} />
        <DateInput source="join_date" validate={required()} />
        <DateInput source="graduation_date" />
        <SelectInput source="status" validate={required()} choices={[
          { id: 'Active', name: 'Active' },
          { id: 'Graduated', name: 'Graduated' }
        ]} />
      </SimpleForm>
    </Create>
  )
};