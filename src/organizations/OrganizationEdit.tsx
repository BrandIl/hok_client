import React, { FC, useEffect, useState} from 'react';
import {
    Edit,
    EditProps,
    TextInput,
    required,
    email,
    FormTab,
    TabbedForm,
    useEditController,
    useTranslate,
    EditContextProvider,
    Button,
    CreateButton,
    Show,
    SimpleShowLayout,
    TextField,
    useDataProvider,
    useVersion,
    FieldTitle,
} from 'react-admin';
import unstable_Box from "@material-ui/core/Box"
import { Card,  Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Customer, Organization, Program } from '../types';
import CloseIcon from '@material-ui/icons/Close';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery, Theme } from '@material-ui/core';

import GenerateCharges from '../dashboard/GenerateCharges';
import GenerateCredits from '../dashboard/GenerateCredits';
import  ProgramsListDashboard  from '../programs/ProgramListDashboard';
import CustomersListDashboard from '../customers/CustomerListDashboard';
import { OrganizationShow } from './OrganizationShow';
import CollectionReport from './CollectionReport';
import FinishedReport from './FinishedReport';
import { OrganizationCard } from './OrganizationCard';


const Box =unstable_Box;
interface State {
    programs?: Program[]
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 40,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '3em',
    },
    form: {
        [theme.breakpoints.up('xs')]: {
            width: 400,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            marginTop: -30,
        },
    },
    inlineField: {
        display: 'inline-block',
        width: '100%',
    },
    
}));


const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 6, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
    
};


const requiredValidate = [required()];
interface Props extends EditProps {
  onCancel?: () => void;
}
const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

export const OrganizationEdit: FC<Props> = ({ onCancel, ...props }) => {
    const [state, setState] = useState<State>({});
    const version = useVersion();
    const dataProvider = useDataProvider();

    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    // const fetchCustomers = useCallback(async () => {
    //     const { data: customers } = await dataProvider.getList<Customer>(
    //         'customers',
    //         {
    //             filter: { organizationId: props.id},
    //             sort: { field: 'name', order: 'DESC' },
    //             pagination: { page: 1, perPage: 100 },
    //         }
    //     );
    //     setState(state => ({ ...state, customers }));
       
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dataProvider]);

    // const fetchPrograms = useCallback(async () => {
    //     const { data: programs } = await dataProvider.getList<Program>(
    //         'programs',
    //         {
    //             filter: { organizationId: props.id},
    //             sort: { field: 'name', order: 'DESC' },
    //             pagination: { page: 1, perPage: 100 },
    //         }
    //     );
    //     setState(state => ({ ...state, programs }));
       
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dataProvider]);

   useEffect(() => {
    //fetchPrograms();
   // fetchCustomers();
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps

    const classes = useStyles();
    const controllerProps = useEditController<Organization>(props);
    const translate = useTranslate();
    const history = useHistory();
    if (!controllerProps.record) {
        return null;
    }
    const {
        programs,
     } = state;

     const Title = ( record:any ) => {
        return <span> {record ? `${record.record.name}` : ''}</span>;

  
    };



    return (
       <div>
          <Show component="div" title={<Title />} {...props}>
          <SimpleShowLayout >
            <OrganizationCard  />
         </SimpleShowLayout>
          </Show>

          <div style={styles.flex}>
          <div style={styles.rightCol}>
             <ProgramsListDashboard organizationId={ props.id}/>
          </div>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                           <FinishedReport />
                           <CollectionReport />
                    </div>
                    <CustomersListDashboard organizationId={ props.id}/>
                </div>
            </div>
       </div>
    );
};