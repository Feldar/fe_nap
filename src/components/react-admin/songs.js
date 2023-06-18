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

const songFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const SongsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={songFilters} >
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
          <ReferenceField label="Album" source="album_id" reference="albums" link="edit">
            <TextField source="name_rm" />
          </ReferenceField>
          <FileField source="file" title='Song File' />
          <NumberField source="song_number" />
          <TextField source="name_rm" />
          <TextField source="name_jp" />
          <NumberField source="duration" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const SongsTitle = () => {
  const record = useRecordContext();
  return record ? record.name_rm : '';
};

export const SongsShow = () => (
  <Show title={<SongsTitle />} disableAuthentication>
    <SimpleForm>
      <ReferenceField label="Album" source="album_id" reference="albums" link="edit">
        <TextField source="name_rm" />
      </ReferenceField>
      <FileField source="file" title='title' />
      <NumberField source="song_number" />
      <TextField source="name_rm" />
      <TextField source="name_jp" />
      <NumberField source="duration" />
    </SimpleForm>
  </Show>
);

export const SongsEdit = () => {
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
    <Edit title={<SongsTitle />}>
      <SimpleForm>
        <ReferenceInput source="album_id" reference="albums"  defaultValue={1}>
          <AutocompleteInput optionText="name_rm" validate={required()} />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='file' defaultValue={filePath} validate={required()}/>{/*  hidden */}
        <TextInput source="filename" defaultValue={fileName} validate={required()}/>
        {/* ocultar y requerir */}
        <NumberInput source="song_number" validate={required()} min={1} />
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="duration" validate={required()} />
      </SimpleForm>
    </Edit>
  )
};

export const SongsCreate = () => {
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
        <ReferenceInput source="album_id" reference="albums"  defaultValue={1}>
          <AutocompleteInput optionText="name_rm" validate={required()} />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='file' defaultValue={filePath} validate={required()}/>{/*  hidden */}
        <TextInput source="filename" defaultValue={fileName} validate={required()}/>
        {/* ocultar y requerir */}
        <NumberInput source="song_number" validate={required()} min={1} />
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="duration" validate={required()} />
      </SimpleForm>
    </Create>
  )
};