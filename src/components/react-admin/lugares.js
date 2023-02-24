import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ImageField
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const lugarFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const LugarList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={lugarFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.tipo}
          tertiaryText={(record) => record.image}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <TextField source="name" />
          <ImageField source="imagen" />
          <TextField source="tipo" />
          <TextField source="ubicacion" />
          <TextField source="descripcion" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const LugarTitle = () => {
  const record = useRecordContext();
  return <span>Lugar {record ? `"${record.name}" - ${record.tipo}` : ''}</span>;
};

export const LugarEdit = () => (
  <Edit title={<LugarTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ImageField source="imagen" />
      <TextInput source="tipo" />
      <TextInput source="ubicacion" />
      <TextInput source="descripcion" />
    </SimpleForm>
  </Edit>
);

export const LugarCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ImageField source="imagen" />
      <TextInput source="tipo" />
      <TextInput source="ubicacion" />
      <TextInput source="descripcion" />
    </SimpleForm>
  </Create>
);