import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    list: {
        flexGrow: 1,
        transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 10,
    },
    listWithDrawer: {
        marginRight: 400,
    },
    drawerPaper: {
        zIndex: 100,
    },
    sectionTitle: {
        display: 'inline-block',
        marginTop: 20
    },
    formInput: {
        display: 'inline-block',
        marginInlineEnd: 30,
        marginTop: 20
    },
    formDataConsumerInput: {
        marginInlineEnd: 30,
        marginTop: 20,
        minWidth: 255
    },
    form: {
        width: 800
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1em',
    },

}));

