
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function SectionTitle({ label }: { label: string }) {
    const classes = useStyles();
    return (
        <Typography variant="h6" gutterBottom className={classes.sectionTitle}>
            {label}
        </Typography>
    )
}