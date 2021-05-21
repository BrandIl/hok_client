import React, { FC } from 'react';
import {
    Edit,
    EditProps,
    SimpleForm,
    TextInput,
    required,
    email,
    TopToolbar,
    Button,
    ShowButton,
    Create,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRedirect,
    useRefresh,
    FormTab,
    TabbedForm,
} from 'react-admin';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';

export const ProgramCreate: FC<EditProps> = props => {
   

    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);
    const requiredValidate = [required()];
    const Separator = () => <Box pt="1em" />;
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const onSuccess = () => {
       
        notify(`התכנית נוספה בהצלחה!`);
        redirect('/programs');
        refresh();
    };
    const onFailure = () => {
       
        notify(`ארעה שגיאה!`);
    };
    const SectionTitle = ({ label }: { label: string }) => {
    return (
        <Typography variant="h6" gutterBottom>
            {label}
        </Typography>
    );

   };
    return (
        <Create title="הוספת תכנית" onSuccess={onSuccess}  onFailure={onFailure} {...props}>

            <TabbedForm>
                <FormTab  label="פרטי לקוח">
            <ReferenceInput label="לקוח" source="customerId" reference="customers">
                <SelectInput optionText="lastName" formClassName={classes.left}  validate={requiredValidate}/>
              </ReferenceInput>

              <ReferenceInput label="פרויקט" source="projectId" reference="projects">
                <SelectInput optionText="name" formClassName={classes.left}  validate={requiredValidate}/>
              </ReferenceInput>
           
             <ReferenceInput label="ארגון" source="organizationId" reference="organizations">
                <SelectInput optionText="name" formClassName={classes.left}  validate={requiredValidate}/>
              </ReferenceInput>
            </FormTab>
            <FormTab label="פרטי תכנית"  path="details"
                contentClassName={classes.tab}
            >
                  <SectionTitle label="פרטי תכנית" />
                <TextInput
                    source="sum"
                    label="סכום לגביה"
                    formClassName={classes.right}
                    validate={requiredValidate}
                />
               <TextInput
                    source="startDate"
                    label="תאריך התחלה"
                    formClassName={classes.left}
                    validate={requiredValidate}
                />
                <Separator/>

                <TextInput
                    source="numOfPayments"
                    label="מספר תשלומים"
                    formClassName={classes.right}
                    validate={requiredValidate}
                />
                <TextInput
                    source="launchDay"
                    label="יום גביה"
                    formClassName={classes.left}
                    validate={requiredValidate}
                />
            </FormTab>

            <FormTab  label="שיטת תשלום" path="reviews">
                  <SectionTitle label="חשבון בנק" />
                     <TextInput
                    source="paymentMethod.bankAccount.bankId"
                    label="בנק"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentMethod.bankAccount.branchId"
                    label="סניף"
                    formClassName={classes.center}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentMethod.bankAccount.accountNumber"
                    label="מספר חשבון"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />
                <Separator />
                <SectionTitle label="כרטיס אשראי" />
                     <TextInput
                    source="paymentMethod.CreditCard.creditNumber"
                    label="מספר אשראי"
                    formClassName={classes.right}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentMethod.CreditCard.expiringDate"
                    label="תוקף"
                    formClassName={classes.center}
                     validate={requiredValidate}
                />
                         <TextInput
                    source="paymentMethod.CreditCard.cvv2"
                    label="cvv"
                    formClassName={classes.left}
                     validate={requiredValidate}
                />
            </FormTab>
        </TabbedForm> 
        </Create>
    );
};

