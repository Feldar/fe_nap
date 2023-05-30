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

const entrenadorFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const ShowsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={entrenadorFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.imagen}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <ImageField source="imagen" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="ciudad" />
          <TextField source="pais" />
          <TextField source="sexo" />
          <TextField source="telefono" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}