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
  FileField,
  DateInput,
  DateField,
  SelectInput,
  required,
  NumberInput,
  NumberField,
  ReferenceInput,
  ReferenceField,
  AutocompleteInput
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const albumFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const AlbumsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={albumFilters} >
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
          <FileField source="image" title='title' />
          <TextField source="name_rm" />
          <TextField source="name_jp" />
          <NumberField source="total_songs" />
          <NumberField source="release_price" />
          <TextField source="media_format" />
          <DateField source="release_date" />
          <NumberField source="duration" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const AlbumsTitle = () => {
  const record = useRecordContext();
  return record ? record.name_rm : '';
};

export const AlbumsShow = () => (
  <Show title={<AlbumsTitle />} disableAuthentication>
    <SimpleForm>
      <FileField source="image" title='title' />
      <TextField source="name_rm" />
      <TextField source="name_jp" />
      <NumberField source="total_songs" />
      <NumberField source="release_price" />
      <TextField source="media_format" />
      <DateField source="release_date" />
      <NumberField source="duration" />
    </SimpleForm>
  </Show>
);

export const AlbumsEdit = () => {
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
    <Edit>
      <SimpleForm>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='image' defaultValue={filePath} disabled />{/* validate={required()} hidden */}
        {/* ocultar y requerir */}
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <NumberInput source="total_songs" validate={required()} />
        <NumberInput source="release_price" validate={required()} />
        <TextInput source="media_format" validate={required()} />
        <DateInput source="release_date" validate={required()} />
        <NumberInput source="duration" validate={required()} />
      </SimpleForm>
    </Edit>
  )
};

export const AlbumsCreate = () => {
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
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='image' defaultValue={filePath} disabled />{/* validate={required()} hidden */}
        {/* ocultar y requerir */}
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <NumberInput source="total_songs" validate={required()} />
        <NumberInput source="release_price" validate={required()} />
        <TextInput source="media_format" validate={required()} />
        <DateInput source="release_date" validate={required()} />
        <NumberInput source="duration" validate={required()} />
      </SimpleForm>
    </Create>
  )
};