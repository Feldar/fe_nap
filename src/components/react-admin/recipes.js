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

export const RecipeList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={recipeFilters} disableAuthentication >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.hits}
          secondaryText={(record) => record.hits}
          tertiaryText={(record) => record.hits}
          linkType={(record) => 'show'}
        >
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="label" />
          <ImageField source="image" />
        </Datagrid>
      )}
    </List>
  );
}