import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import { useQueryWithStore, useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';
import { Organization } from '../utils/types';
import CardWithIcon from './CardWithIcon';



const OrganizationsListDashboard = () => {
    const translate = useTranslate();
    const classes = useStyles();

    const { loaded, data: organizations } = useQueryWithStore({
        type: 'getList',
        resource: 'organizations',
        payload: {
            filter: {

            },
            sort: {},
            pagination: { page: 1, perPage: 100 },
        },
    });

    if (!loaded) return null;

    return (
        <div className={classes.list} >
            <CardWithIcon
                to="/organizations/create"
                icon={CustomerIcon}
                title={translate('הוספת מוסד')}

            >

                <List
                >
                    {organizations
                        ? organizations.map((record: Organization) => (
                            <ListItem
                                button
                                to={`/organizations/${record.id}/show`}
                                component={Link}
                                key={record.id}
                            >
                                <ListItemText
                                    classes={{ primary: classes.listItemText }}
                                    primary={`${record.name}`}
                                />
                            </ListItem>
                        ))
                        : null}
                </List>
                <Box flexGrow="1">&nbsp;</Box>
                <Button
                    className={classes.link}
                    component={Link}
                    to="/organizations"
                    size="small"
                    color="primary"
                >
                    <Box p={1} className={classes.linkContent}>
                        {translate('כל המוסדות')}
                    </Box>
                </Button>
            </CardWithIcon>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    list: {
        // margin:'2em'
        // fontSize:'2em'
    },
    link: {
        borderRadius: 0,
    },
    linkContent: {
        color: theme.palette.primary.main,
        fontSize: '2em'
    },
    listItemText: {
        fontSize: '2em',//Insert your required size

        justifyContent: 'flex-end'
    }
}));

export default OrganizationsListDashboard;
