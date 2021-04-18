import { List, Datagrid, TextField } from "react-admin"
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';

export const OrganizationList = ({...props}) =>  {
    const styles: Styles<Theme, any> = {
        right: { display: 'inline-block', direction: 'rtl',margin: 32},
        center: { display: 'inline-block',  direction: 'rtl',margin: 32},
        left: { display: 'inline-block', direction: 'rtl',margin: 32 },
    };
    
    const useStyles = makeStyles(styles);
    const classes = useStyles(props);
    return(
    <List {...props}>
        <Datagrid>
            <TextField label="שם ארגון"  source="name" />
            <TextField label="עיר" source="communication.address.city.name" />
            <TextField label="מיקוד" source="communication.address.city.zip" />
            <TextField label="רחוב" source="communication.address.street.name" />
            <TextField label="מספר" source="communication.address.street.number" />
        </Datagrid>
    </List>
    );
};


