import React, { FC } from 'react';
import {
  BooleanInput,
  Create,
  CreateProps, ReferenceArrayInput, SelectArrayInput, SimpleForm, TextInput
} from 'react-admin';
import { validateEmail, validateNames } from '../utils/validations';
import { UserCreateActions } from './UserCreateActions';



export const UserCreate: FC<CreateProps> = props => {

  return (
    <Create
      actions={<UserCreateActions />}
      {...props}
    >
      <SimpleForm>

        <TextInput
          variant="standard"
          source="name"
          validate={validateNames(2, 20)}
        />
        <TextInput
          variant="standard"
          source="email"
          validate={validateEmail}
        />
        <TextInput
          variant="standard"
          source="password"
          validate={validateNames(4, 20)}
        />
        <BooleanInput
          source="isAdmin"
        />

        <ReferenceArrayInput
          source="organizations"
          reference="organizations"
          variant="standard"
        >
          <SelectArrayInput
            optionText="name"
          />
        </ReferenceArrayInput>

      </SimpleForm>
    </Create>
  );
};

