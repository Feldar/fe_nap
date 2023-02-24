import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  AutocompleteInput,
  Resource
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const rutinaFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const RutinaList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={rutinaFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.meta}
          linkType={(record) => 'show'}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <TextField source="name" />
          <TextField source="meta" />
          <TextField source="descripcion" />
          <ReferenceField source="entrenador_id" reference="entrenadores">
            <TextField source="name" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const RutinaTitle = () => {
  const record = useRecordContext();
  return <span>Rutina {record ? `"${record.name}"` : ''}</span>;
};

export const RutinaEdit = () => (
  <Edit title={<RutinaTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <Resource name="entrenadores" recordRepresentation="name" />
      <ReferenceInput source="entrenador_id" reference="entrenadores">
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="meta" />
      <TextInput source="descripcion" />
    </SimpleForm>
  </Edit>
);

export const RutinaCreate = () => (
  <Create>
    <SimpleForm>
      <Resource name="entrenadores" recordRepresentation="name" />
      <ReferenceInput source="entrenador_id" reference="entrenadores">
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="meta" />
      <TextInput source="descripcion" />
    </SimpleForm>
  </Create>
);