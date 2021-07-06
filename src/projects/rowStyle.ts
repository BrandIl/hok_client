import green from '@material-ui/core/colors/green';
import { useTheme } from '@material-ui/core/styles';
import { Identifier } from 'react-admin';
import { Program } from '../utils/types';


const rowStyle = (selectedRow?: Identifier) => (record: Program) => {
    const theme = useTheme();
    let style = {};
    if (!record) {
        return style;
    }
    if (selectedRow && selectedRow === record.id) {
        style = {
            ...style,
            backgroundColor: theme.palette.action.selected,
        };

        return {
            ...style,
            borderLeftColor: green[500],
            borderLeftWidth: 5,
            borderLeftStyle: 'solid',
        };

    };
}
export default rowStyle;
