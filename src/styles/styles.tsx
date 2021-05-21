import { Typography, Box } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/styles/withStyles';
import { required } from 'react-admin';

   export const styles: Styles<Theme, any> = {
        center: { display: 'inline-block', direction: 'rtl',margin: 32}
    };
    
    export const useStyles = makeStyles(styles);
   
    export const requiredValidate = [required()];
    export const Separator = () => <Box pt="1em" />;
    export const SectionTitle = ({ label }: { label: string }) => {
    return (
        <Typography variant="h6" gutterBottom>
            {label}
        </Typography>
    );
   };


