// in src/components/react-admin/recipes.js
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  TextInput,
  ImageField
} from 'react-admin';

import { useMediaQuery } from '@mui/material';

const recipeFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

const ShowsList = () => (
  <List filters={recipeFilters} >
    <Datagrid bulkActionButtons={false} >
      <TextField source="label" />
      <ImageField source="image" />
    </Datagrid>
    )
  </List>
);

export default ShowsList;