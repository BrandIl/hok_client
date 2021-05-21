import React, { FC } from 'react';
import {
    Create,
    CreateProps,
    DateInput,
    SimpleForm,
    TextInput,
    useTranslate,
    PasswordInput,
    required,
    email,
    TopToolbar,
    Button,
    ShowButton,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRedirect,
    useRefresh,
    FormTab,
    TabbedForm,
} from 'react-admin';

import { requiredValidate, SectionTitle, Separator, useStyles } from '../styles/styles';

export const CustomerCreate: FC<CreateProps> = props => {
    
const classes = useStyles(props);
const notify = useNotify();
const refresh = useRefresh();
const redirect = useRedirect();

const onSuccess = () => {
    notify(`הלקוח נוסף בהצלחה!`)
    redirect('/customers');
    refresh();
   
}; 
    return (
        <Create title="הוספת לקוח חדש"  onSuccess={onSuccess} {...props}>
        <TabbedForm>
            <FormTab label="פרטים אישיים">
            <TextInput label="שם פרטי"  source="firstName" />
            <TextInput label="שם משפחה"  source="lastName" />
            <TextInput label="תעודת זהות"  source="identity" />
            </FormTab>
            <FormTab label="כתובת">
                <TextInput
                    source="communication.address.city.name"
                    label="עיר"
                    formClassName={classes.right}
                    validate={requiredValidate}
                />
               <TextInput
                    source="communication.address.city.zip"
                    label="מיקוד"
                    formClassName={classes.left}
                    validate={requiredValidate}
                />
                <Separator/>

                <TextInput
                    source="communication.address.street.name"
                    label="רחוב"
                    formClassName={classes.right}
                    validate={requiredValidate}
                />
                <TextInput
                    source="communication.address.street.number"
                    label="מספר"
                    formClassName={classes.left}
                    validate={requiredValidate}
                />
                </FormTab>

              <FormTab label="יצירת קשר">
                 <TextInput
                    type="email"
                    source="communication.email"
                    label="מייל"
                    formClassName={classes.center}
                    validation={{ email: true }}
                    validate={[required(), email()]}
                />

               <TextInput
                    source="communication.phone"
                    label="טלפון"
                    formClassName={classes.center}
                    validate={requiredValidate}
                />
                </FormTab>
                <FormTab label="מוסד">
           
                <ReferenceInput label="מוסד" source="organizationId" reference="organizations">
                <SelectInput  optionText="name" formClassName={classes.left}  validate={requiredValidate}/>
              </ReferenceInput>
              </FormTab>

        </TabbedForm>
        </Create>
    );
};