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
  ImageInput,
  FileField,
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

const tvshowsFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const TvshowsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const ImageName = () => {
    const record = useRecordContext();
    if(record.imagename){
    return <FileField source="image" title="title" Label={record.imagename} />
    }
    else {
      return <FileField source="image" title="title" Label="Image" />
    }
  }

  return (
    <List filters={tvshowsFilters} >
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
          <ImageName />
          <TextField source="name_jp" />
          <TextField source="name_rm" />
          <TextField source="name_en" />
          <DateField source="start_date" />
          <DateField source="end_date" />
          <NumberField source="episodes" />
          <TextField source="status" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const TvshowsTitle = () => {
  const record = useRecordContext();
  return record ? record.name_rm : '';
};

export const TvshowsShow = () => (
  <Show title={<TvshowsTitle />} disableAuthentication>
    <SimpleForm>
      <ImageField source="image"/>
      <TextField source="name_jp" />
      <TextField source="name_rm" />
      <TextField source="name_en" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <NumberField source="episodes" />
      <TextField source="status" />
    </SimpleForm>
  </Show>
);

export const TvshowsEdit = () => {
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
          setFilepath(response.data)
          setFileName(file.filename)
        }
        )
    }
  }

  return (
    <Edit title={<TvshowsTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        <TextInput source='image' defaultValue={filepath}/>{/* validate={required()} hidden */}
        <TextInput source="imagename" defaultValue={fileName}/>
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_en" />
        <DateInput source="start_date" validate={required()} />
        <DateInput source="end_date" />
        <NumberInput source="episodes" min={0} />
        <SelectInput source="status" validate={required()} choices={[
          { id: 'Ongoing', name: 'Ongoing' },
          { id: 'Ended', name: 'Ended' },
          { id: 'Not yet aired', name: 'Not yet aired' }
        ]} />
      </SimpleForm>
    </Edit>
  )
};

export const TvshowsCreate = () => {
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
        <input id="uploadfile" type='file' name='file' onChange={fileSelectHandler} />
        <button onClick={sendHandler}>Upload</button>
        <TextInput source='image' defaultValue={filepath}/>{/* validate={required()} hidden */}
        <TextInput source="imagename" defaultValue={fileName}/>
        <TextInput source="name_jp" validate={required()} />
        <TextInput source="name_rm" validate={required()} />
        <TextInput source="name_en" />
        <DateInput source="start_date" validate={required()} />
        <DateInput source="end_date" />
        <NumberInput source="episodes" min={0} />
        <SelectInput source="status" validate={required()} choices={[
          { id: 'Ongoing', name: 'Ongoing' },
          { id: 'Ended', name: 'Ended' },
          { id: 'Not yet aired', name: 'Not yet aired' }
        ]} />
      </SimpleForm>
    </Create>
  )
};