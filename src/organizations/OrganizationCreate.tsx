import React, { FC } from 'react';
import {
    Create,
    CreateProps,
    SimpleForm,
    TextInput,
    required,
    email,
    useRefresh,
    useNotify,
    useRedirect,
    TabbedForm,
    TabbedFormTabs,
    FormTab,
} from 'react-admin';
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
   const notify = useNotify();
   const refresh = useRefresh();
   const redirect = useRedirect();

   const onSuccess = () => {
       notify(`המוסד נוסף בהצלחה!`)
       redirect('/organizations');
       refresh();
      
   };
   const onFailure = () => {
    // refresh();
     notify(`שגיאה`)
   //  redirect('/posts');
    
 };
    return (
        <Create title="הוספת מוסד" onSuccess={onSuccess}  onFailure={onFailure} {...props}>
            <TabbedForm>
               <FormTab  label="פרטי לקוח">
                <SectionTitle label="שם הארגון" />
                <TextInput  
                    autoFocus
                    source="name"
                    label="שם הארגון"
                    formClassName={classes.center}
                    validate={requiredValidate}
                />
                </FormTab>
                <FormTab label="כתובת" >
                <TextInput
                    source="communication.address.city.name"
                    label="עיר"
                    formClassName={classes.right}
                />
               <TextInput
                    source="communication.address.city.zip"
                    label="מיקוד"
                    formClassName={classes.left}
                />
                <Separator/>

                <TextInput
                    source="communication.address.street.name"
                    label="רחוב"
                    formClassName={classes.right}
                />
                <TextInput
                    source="communication.address.street.number"
                    label="מספר"
                    formClassName={classes.left}
                />
                </FormTab>
                <FormTab label="יצירת קשר" >
                 <TextInput
                    type="email"
                    source="communication.concat.email"
                    label="מייל"
                    formClassName={classes.center}
                    validation={{ email: true }}
                    validate={[required(), email()]}
                />

               <TextInput
                    source="communication.concat.phone"
                    label="טלפון"
                    formClassName={classes.center}
                />
                </FormTab>
                <FormTab label='פרטי מס"ב'>
                 <SectionTitle label="זיכויים" />
                 <TextInput
                    source="masavData.credit.codeNosse"
                    label="creditNosse"
                    formClassName={classes.right}
                />
                 <TextInput
                    source="masavData.credit.senderCode"
                    label="senderCode"
                    formClassName={classes.left}
                />
              <SectionTitle label="חיובים" />
              <TextInput
                    source="masavData.charge.codeNosse"
                    label="creditNosse"
                    formClassName={classes.right}
                />
                 <TextInput
                    source="masavData.charge.senderCode"
                    label="senderCode"
                    formClassName={classes.left}
                />

                <Separator />
                </FormTab>
                <FormTab  label="שיטת תשלום">
                 <TextInput
                    source="paymentAgreement.minPrice"
                    label="מחיר מינימום"
                    formClassName={classes.right}
                />
                     <TextInput
                    source="paymentAgreement.feePerUnit"
                    label="תשלום ליחידה"
                    formClassName={classes.center}
                />

                  <Separator />
                  </FormTab>
                  <FormTab label="חשבון בנק">
                  <SectionTitle label="חשבון בנק" />
                     <TextInput
                    source="paymentAgreement.paymentMethod.bankAccount.bankId"
                    label="בנק"
                    formClassName={classes.right}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.bankAccount.branchId"
                    label="סניף"
                    formClassName={classes.center}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.bankAccount.accountNumber"
                    label="מספר חשבון"
                    formClassName={classes.left}
                />
                <Separator />
                <SectionTitle label="כרטיס אשראי" />
                     <TextInput
                    source="paymentAgreement.paymentMethod.CreditCard.creditNumber"
                    label="מספר אשראי"
                    formClassName={classes.right}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.CreditCard.expiringDate"
                    label="תוקף"
                    formClassName={classes.center}
                />
                         <TextInput
                    source="paymentAgreement.paymentMethod.CreditCard.cvv2"
                    label="cvv"
                    formClassName={classes.left}
                />
                </FormTab>
            </TabbedForm>
        </Create>
    );
};


