import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const ejercicioFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const EjercicioList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={ejercicioFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.categoria}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <TextField source="name" />
          <TextField source="categoria" />
          <TextField source="repeticiones" />
          <TextField source="sets" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const EjercicioTitle = () => {
  const record = useRecordContext();
  return <span>Ejercicio {record ? `"${record.name}" - ${record.categoria}` : ''}</span>;
};

export const EjercicioEdit = () => (
  <Edit title={<EjercicioTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="categoria" />
      <TextInput source="repeticiones" />
      <TextInput source="sets" />
    </SimpleForm>
  </Edit>
);

export const EjercicioCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="categoria" />
      <TextInput source="repeticiones" />
      <TextInput source="sets" />
    </SimpleForm>
  </Create>
);