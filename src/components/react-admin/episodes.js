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
  FileInput,
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
import { useState, useCallback } from 'react';
import {useFormContext} from 'react-hook-form';

const episodeFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const EpisodesList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List filters={episodeFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name_rm}
          secondaryText={(record) => record.name_jp}
          tertiaryText={(record) => record.image}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="show">
          {/* <FileToObjectField /> */}
          <FileField source="file" title='title' />
          <NumberField source="episode_number" />
          <TextField source="name_rm" />
          <TextField source="name_jp" />
          <TextField source="name_en" />
          <TextField source="format" />
          <TextField source="resolution" />
          <DateField source="release_date" />
          <TextField source="type" />
          <TextField source="duration" />
          <ReferenceField source="tvshows_id" reference="tvshows" link="show">
            <TextField source="name_rm" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const EpisodesTitle = () => {
  const record = useRecordContext();
  return record ? record.name_rm : '';
};

const FileToObjectField = () => {
  const record = useRecordContext();
  if (!record) return null;
  if (!record.file) return null;
  console.log(record.file)
  const fileObject = JSON.parse(record.file);

  return <FileField source="file" title="title" />;
};

const FileToObjectInput = () => {
  const record = useRecordContext();
  if (!record) return null;
  if (!record.file)
    return <FileInput source="file">
      <FileField source="src" title="title" />
    </FileInput>
  const fileObject = JSON.parse(record.file);

  return <FileInput source="file" />;
};

const HandleSubmit = () => {
  const fileElement = document.getElementById('fileInput')
  let file = fileElement.files[0];
  let formData = new FormData();
  formData.set('file', file);
  axios.post('http://nananijiarchiveproject.test/img', formData)
}

export const EpisodesShow = () => (
  <Show title={<EpisodesTitle />} disableAuthentication>
    <SimpleForm>
      <FileField source="file" title='title' />
      <NumberField source="episode_number" />
      <TextField source="name_rm" />
      <TextField source="name_jp" />
      <TextField source="name_en" />
      <TextField source="format" />
      <TextField source="resolution" />
      <DateField source="release_date" />
      <TextField source="type" />
      <TextField source="duration" />
      <ReferenceField label="Tv show" source="tvshows_id" reference="tvshows" link="show">
        <TextField source="name_rm" />
      </ReferenceField>
    </SimpleForm>
  </Show>
);

export const EpisodesEdit = () => {
  const initialvaluesinput = {
    file: null,
    filename: '',
    fileURL: ''
  }

  const [file, setFile] = useState(initialvaluesinput);
  const [filepath, setFilepath] = useState(null);

  const fileSelectHandler = (e) => {
    setFile({
      file: e.target.files[0],
      filename: e.target.files[0].name
    });
  }

  const sendHandler = e => {
    e.preventDefault();

    const formdata = new FormData();
    
    if(file.file){

    formdata.append('file', file.file, file.filename);
    axios.post('http://nananijiarchiveproject.test/api/upload', formdata)
      .then(response => {
        setFilepath(`http://nananijiarchiveproject.test/${response.data}`)}
      )
    }
  }

  return (
    <Edit title={<EpisodesTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="tvshows_id" reference="tvshows">
          <AutocompleteInput optionText="name_rm" />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        <TextInput source='file' value={null} defaultValue={filepath} />
        <NumberInput source="episode_number" validate={required()} min={1} />
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" />
        <TextInput source="name_en" />
        <TextInput source="format" validate={required()} />
        <TextInput source="resolution" validate={required()} />
        <DateInput source="release_date" validate={required()} />
        <TextInput source="type" validate={required()} />
        <TextInput source="duration" validate={required()} />
      </SimpleForm>
    </Edit>
  )
};

export const EpisodesCreate = () => {
  const initialvaluesinput = {
    file: null,
    filename: '',
    fileURL: ''
  }

  const [file, setFile] = useState(initialvaluesinput);
  const [filepath, setFilepath] = useState(null);

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

    formdata.append('file', file.file, fileblob, file.filename);
    axios.post('http://nananijiarchiveproject.test/api/upload', formdata)
      .then(response => {
        setFilepath(`http://nananijiarchiveproject.test/${response.data}`)}
      )
  }

  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="tvshows_id" reference="tvshows" defaultValue={0}>
          <AutocompleteInput optionText="name_rm" />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        <TextInput source='file' defaultValue={filepath} />
        <NumberInput source="episode_number" validate={required()} min={1} />
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_jp" />
        <TextInput source="name_en" />
        <TextInput source="format" validate={required()} />
        <TextInput source="resolution" validate={required()} />
        <DateInput source="release_date" validate={required()} />
        <TextInput source="type" validate={required()} />
        <TextInput source="duration" validate={required()} />
      </SimpleForm>
    </Create>
  )
};