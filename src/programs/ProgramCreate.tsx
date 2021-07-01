import React, { FC } from 'react';
import {
    BooleanInput,
    Create, CreateProps,
    SimpleForm,
    TextInput,
    useTranslate
} from 'react-admin';
import { CustomerInput } from '../customers/CustomerInput';
import { OrganizationInput } from '../organizations/OrganizationInput';
import { ProjectInput } from '../projects/ProjectInput';
import SectionTitle from '../utils/SectionTitle';
import { useStyles } from '../utils/styles';
import { validateDigits, validatePrice } from '../utils/validations';
import { ProgramCreateActions } from './ProgramCreateActions';



export const ProgramCreate: FC<CreateProps> = props => {
    const classes = useStyles(props);
    const translate = useTranslate();

    return (
        <Create
            actions={<ProgramCreateActions />}
            {...props}
        >
            <SimpleForm>
                <SectionTitle
                    label={translate("resources.programs.fieldGroups.customer_details")}
                />
                <>
                    <OrganizationInput />
                    <ProjectInput />
                    <CustomerInput />
                </>

                <SectionTitle
                    label={translate("resources.programs.fieldGroups.collection_details")}
                />
                <TextInput
                    source="sum"
                    formClassName={classes.formInput}
                    variant="standard"
                    validate={validatePrice}
                />
                <TextInput
                    source="startDate"
                    formClassName={classes.formInput}
                    variant="standard"

                    type="month"
                    defaultValue={`${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                />
                <TextInput
                    source="endDate"
                    formClassName={classes.formInput}
                    variant="standard"

                    type="month"
                    defaultValue={`${new Date().getFullYear() + 1}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                />
                <SectionTitle
                    label=""
                />
                <TextInput
                    source="numOfPayments"
                    formClassName={classes.formInput}
                    variant="standard"

                    validate={validateDigits(1, 3)}
                />

                <TextInput
                    source="launchDay"
                    formClassName={classes.formInput}
                    variant="standard"

                    type="year"
                    validate={validateDigits(1, 2)}
                />


                <SectionTitle
                    label={translate("resources.programs.fieldGroups.bank_account")}
                />

                <TextInput
                    source="paymentMethod.bankAccount.bankId"
                    formClassName={classes.formInput}
                    variant="standard"

                    validate={validateDigits(2, 2)}
                />
                <TextInput
                    source="paymentMethod.bankAccount.branchId"
                    formClassName={classes.formInput}
                    variant="standard"

                    validate={validateDigits(3, 3)}
                />
                <TextInput
                    source="paymentMethod.bankAccount.accountNumber"
                    formClassName={classes.formInput}
                    variant="standard"

                    validate={validateDigits(6, 6)}
                />
                <BooleanInput
                    source="isActive"
                    formClassName={classes.formInput}
                />

            </SimpleForm>
        </Create >
    );
};

