import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CreateButton, List, useListContext } from 'react-admin';

export const Empty = () => {
    const { basePath, resource } = useListContext();
    return (
        <Box textAlign="center" m={1}>
            <Typography variant="h4" paragraph>
                No products available
            </Typography>
            <Typography variant="body1">
                Create one or import from a file
            </Typography>
            <CreateButton basePath={basePath} />
       
        </Box>
    );
};

