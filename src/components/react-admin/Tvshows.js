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
  DateInput,
  DateField
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const entrenadorFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const TvshowsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
  return (
    <List filters={entrenadorFilters} >
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
          <ImageField source="image" title="title.e"/>
          <TextField source="name_rm" />
          <TextField source="name_jp" />
          <TextField source="name_en" />
          <DateField source="start_date" />
          <DateField source="end_date" />
          <TextField source="episodes" />
          <TextField source="status" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const TvshowsTitle = () => {
  const record = useRecordContext();
  return <span>Nombre: {record.name_rm}</span>;
};

export const TvshowsShow = () => (
    <Show title={<TvshowsTitle />} disableAuthentication>
      <SimpleForm>
        <ImageField source="image"/>
        <TextField source="name_rm" />
        <TextField source="name_jp" />
        <TextField source="name_en" />
        <DateField source="start_date" />
        <DateField source="end_date" />
        <TextField source="episodes" />
        <TextField source="status" />
      </SimpleForm>
    </Show>
  );

export const TvshowsEdit = () => (
  <Edit title={<TvshowsTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ImageInput source="image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="name_rm" />
      <TextInput source="name_jp" />
      <TextInput source="name_en" />
      <DateInput source="start_date" />
      <DateInput source="end_date" />
      <TextInput source="episodes" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const TvshowsCreate = () => (
  <Create>
    <SimpleForm>
      <ImageInput source="image" />
      <ImageInput source="image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="name_jp" />
      <TextInput source="name_en" />
      <DateInput source="start_date" />
      <DateInput source="end_date" />
      <TextInput source="episodes" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);