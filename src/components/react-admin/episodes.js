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
          <FileToObjectField />
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
  const fileObject = JSON.parse(record.file);

  return <FileField source="file" title={fileObject.title} />;
};

const FileToObjectInput = () => {
  const record = useRecordContext();
  if (!record) return null;
  if (!record.file)
    return <FileInput source="file">
      <FileField source="src" title="title" />
    </FileInput>
  const fileObject = JSON.parse(record.file);

  return <FileInput source="file"/>;
};

export const EpisodesShow = () => (
  <Show title={<EpisodesTitle />} disableAuthentication>
    <SimpleForm>
      <FileToObjectField />
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

export const EpisodesEdit = () => (
  <Edit title={<EpisodesTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="tvshows_id" reference="tvshows">
        <AutocompleteInput optionText="name_rm" />
      </ReferenceInput>
      <FileToObjectInput />
      <FileToObjectField />
      <NumberInput source="episode_number" validate={required()} />
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
);

export const EpisodesCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="tvshows_id" reference="tvshows">
        <AutocompleteInput optionText="name_rm" />
      </ReferenceInput>
      <FileInput source="file">
        <FileField source="src" title="title" />
      </FileInput>
      <NumberInput source="episode_number" validate={required()} />
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
);