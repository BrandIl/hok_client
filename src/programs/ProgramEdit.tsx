import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC } from 'react';
import {
    BooleanInput,
    EditContextProvider, EditProps, SimpleForm, TextInput,
    useEditController, useTranslate
} from 'react-admin';
import { CustomerInput } from '../customers/CustomerInput';
import { OrganizationInput } from '../organizations/OrganizationInput';
import { ProjectInput } from '../projects/ProjectInput';
import SectionTitle from '../utils/SectionTitle';
import { Organization } from '../utils/types';
import { validateDigits, validatePrice } from '../utils/validations';


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 40,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em',
    },
    form: {
        [theme.breakpoints.up('xs')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            marginTop: -30,
        },
    },
    inlineField: {
        display: 'inline-block',
        marginInlineEnd: 20,
    },
}));

interface Props extends EditProps {
    onCancel: () => void;
}


export const ProgramEdit: FC<Props> = ({ onCancel, ...props }) => {
    const classes = useStyles(props);
    const controllerProps = useEditController<Organization>(props);
    const translate = useTranslate();

    if (!controllerProps.record) {
        return null;
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="h6">
                    {translate('resources.programs.fieldGroups.customer_details')}
                </Typography>
                <IconButton onClick={onCancel}>
                    <CloseIcon />
                </IconButton>
            </div>
            <EditContextProvider value={controllerProps}>
                <SimpleForm
                    className={classes.form}
                    basePath={controllerProps.basePath}
                    record={controllerProps.record}
                    save={controllerProps.save}
                    version={controllerProps.version}
                    redirect="list"
                    resource="programs"
                >

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
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        validate={validatePrice}
                    />
                    <TextInput
                        source="startDate"
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        type="month"
                        defaultValue={`${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                    />
                    <TextInput
                        source="endDate"
                        formClassName={classes.inlineField
                        }
                        variant="standard"
                        type="month"
                        defaultValue={`${new Date().getFullYear() + 1}-${("0" + (new Date().getMonth() + 1)).slice(-2)}`}
                    />
                    <SectionTitle
                        label=""
                    />
                    <TextInput
                        source="numOfPayments"
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        validate={validateDigits(1, 3)}
                    />

                    <TextInput
                        source="launchDay"
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        type="year"
                        validate={validateDigits(1, 2)}
                    />


                    <SectionTitle
                        label={translate("resources.programs.fieldGroups.bank_account")}
                    />

                    <TextInput
                        source="paymentMethod.bankAccount.bankId"
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        validate={validateDigits(2, 2)}
                    />
                    <TextInput
                        source="paymentMethod.bankAccount.branchId"
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        validate={validateDigits(3, 3)}
                    />
                    <TextInput
                        source="paymentMethod.bankAccount.accountNumber"
                        formClassName={classes.inlineField
                        }
                        variant="standard"

                        validate={validateDigits(6, 6)}
                    />

                    <BooleanInput
                        source="isActive"
                        formClassName={classes.inlineField}
                    />
                </SimpleForm>
            </EditContextProvider>
        </div >
    );
};


