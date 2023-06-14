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
          linkType={(record) => 'edit'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="edit">
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
    <Edit title={<EpisodesTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceInput source="tvshows_id" reference="tvshows" defaultValue={0}>
          <AutocompleteInput optionText="name_rm" />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='file' defaultValue={filepath}/>{/* validate={required()} hidden */}
        <TextInput source="filename" defaultValue={fileName}/>

        {/* ocultar y requerir */}
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
        <ReferenceInput source="tvshows_id" reference="tvshows" defaultValue={0}>
          <AutocompleteInput optionText="name_rm" />
        </ReferenceInput>
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        {/* ocultar y requerir */}
        <TextInput source='file' defaultValue={filePath} disabled />{/* validate={required()} hidden */}
        <TextInput source="filename" defaultValue={fileName}/>
        {/* ocultar y requerir */}
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