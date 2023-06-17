// in src/components/react-admin/users.tsx
import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField, TextInput, ReferenceField } from 'react-admin';

const userFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const UserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={userFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="phone" />
        </Datagrid>
      )}
    </List>
  );
};
