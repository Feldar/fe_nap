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
  DateField,
  SelectInput,
  required,
  NumberInput,
  NumberField
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const tvshowsFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const TvshowsList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  //const record = useRecordContext();

  // // Convert the string to a File object
  // const stringToFileObject = (str, filename, type) => {
  //   const parts = [str];
  //   const file = new Blob(parts, { type });
  //   file.name = filename;
  //   return new File([file], filename);
  // };

  // // Example usage: convert a string to a File object
  // const imageString = 'data:image/png;base64,iVBORw0KG...'; // Replace with your image string
  // const imageFile = stringToFileObject(imageString, 'image.png', 'image/png');
  // console.log(imageFile);

  return (
    <List filters={tvshowsFilters} >
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
          <ImageField source="image" title="title" />
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

const FileToObjectField = () => {
  const record = useRecordContext();
  // const fileObject = JSON.parse(record.image);
  if (!record) return null;
  if (!record.image) return null;
  const fileObject = JSON.parse(record.image);

  return <ImageField source="image" title={fileObject.title} />;
};

const FileToObjectInput = () => {
  const record = useRecordContext();
  if (!record) return null;
  if (!record.image)
    return <ImageInput source="image">
      <ImageField source="src" title="title" />
    </ImageInput>;
  console.log(record.image)
  const fileObject = JSON.parse(record.image);

  return <ImageInput source="image">
    <ImageField source={fileObject} title="title" />
  </ImageInput>;
};

export const TvshowsShow = () => (
  <Show title={<TvshowsTitle />} disableAuthentication>
    <SimpleForm>
      <ImageField source="image">

      </ImageField>
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

export const TvshowsEdit = () => (
  <Edit title={<TvshowsTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ImageInput source="image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="name_jp" validate={required()} />
      <TextInput source="name_rm" validate={required()} />
      <TextInput source="name_en" />
      <DateInput source="start_date" validate={required()} />
      <DateInput source="end_date" />
      <NumberInput source="episodes" min={0}/>
      <SelectInput source="status" validate={required()} choices={[
        { id: 'Ongoing', name: 'Ongoing' },
        { id: 'Ended', name: 'Ended' },
        { id: 'Not yet aired', name: 'Not yet aired' }
      ]} />
    </SimpleForm>
  </Edit>
);

export const TvshowsCreate = () => (
  <Create>
    <SimpleForm>
      <ImageInput source="image" title="title" />
      <TextInput source="name_jp" validate={required()} />
      <TextInput source="name_rm" validate={required()} />
      <TextInput source="name_en" />
      <DateInput source="start_date" validate={required()} />
      <DateInput source="end_date" />
      <NumberInput source="episodes" min={0}/>
      <SelectInput source="status" validate={required()} choices={[
        { id: 'Ongoing', name: 'Ongoing' },
        { id: 'Ended', name: 'Ended' },
        { id: 'Not yet aired', name: 'Not yet aired' }
      ]} />
    </SimpleForm>
  </Create>
);