import * as React from 'react';
import { FC } from 'react';
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
} from 'react-admin';
import { AnyObject } from 'react-final-form';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';



export const OrganizationCreate: FC<CreateProps> = props => {
    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);
    const requiredValidate = [required()];
    const Separator = () => <Box pt="1em" />;
    const SectionTitle = ({ label }: { label: string }) => {
    return (
        <Typography variant="h6" gutterBottom>
            {label}
        </Typography>
    );
   };
    return (
        <Create title="הוספת ארגון"  {...props}>
            <SimpleForm>
                <SectionTitle label="שם הארגון" />
                <TextInput  
                    autoFocus
                    source="name"
                    label="שם הארגון"
                    formClassName={classes.center}
                    validate={requiredValidate}
                />
                 <SectionTitle label="כתובת" />
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
                 <SectionTitle label="יצירת קשר" />
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
                 <SectionTitle label='פרטי מס"ב' />
                 <SectionTitle label="אשראי" />
                 <TextInput
                    source="masavData.credit.codeNosse"
                    label="creditNosse"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                 <TextInput
                    source="masavData.credit.senderCode"
                    label="senderCode"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />
              <SectionTitle label="charge" />
              <TextInput
                    source="masavData.charge.codeNosse"
                    label="creditNosse"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                 <TextInput
                    source="masavData.charge.senderCode"
                    label="senderCode"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />

                <Separator />
     
                 <SectionTitle label="שיטת תשלום" />
                 <TextInput
                    source="paymentAgreement.minPrice"
                    label="מחיר מינימום"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                     <TextInput
                    source="paymentAgreement.feePerUnit"
                    label="תשלום ליחידה"
                    formClassName={classes.center}
                     validate={requiredValidate}
                />
                     <TextInput
                    source="paymentAgreement.dayOfCharge"
                    label="יום גביה"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />
                  <Separator />
                  <SectionTitle label="חשבון בנק" />
                     <TextInput
                    source="paymentAgreement.paymentMethod.bankAccount.bankId"
                    label="בנק"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.bankAccount.branchId"
                    label="סניף"
                    formClassName={classes.center}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.bankAccount.accountNumber"
                    label="מספר חשבון"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />
                <Separator />
                <SectionTitle label="כרטיס אשראי" />
                     <TextInput
                    source="paymentAgreement.paymentMethod.CreditCard.creditNumber"
                    label="מספר אשראי"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.CreditCard.expiringDate"
                    label="תוקף"
                    formClassName={classes.center}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.CreditCard.cvv2"
                    label="cvv"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />
            </SimpleForm>
        </Create>
    );
};