import * as React from 'react';
import { FC } from 'react';
import PropTypes from 'prop-types';
import ThumbDown from '@material-ui/icons/ThumbDown';

import {
    Button,
    useUpdateMany,
    useNotify,
    useRefresh,
    useUnselectAll,
    CRUD_UPDATE_MANY,
    BulkActionProps,
    Identifier,
} from 'react-admin';

const noSelection: Identifier[] = [];

const BulkCancelButton: FC<BulkActionProps> = ({
    selectedIds = noSelection,
}) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const unselectAll = useUnselectAll('programs');

    const [active, { loading }] = useUpdateMany(
        'programs',
        selectedIds,
        { isActive: false },
        {
            action: CRUD_UPDATE_MANY,
            undoable: true,
            onSuccess: () => {
                notify(
                    'resources.programs.notification.cancel_success',
                    'info',
                    {},
                    true
                );
                refresh();
                unselectAll();
            },
            onFailure: () => {
                notify(
                    'resources.programs.notification.cancel_error',
                    'warning'
                );
            },
        }
    );

    return (
        <Button
            label="resources.programs.action.cancel"
            onClick={active}
            disabled={loading}
        >
            <ThumbDown />
        </Button>
    );
};

BulkCancelButton.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BulkCancelButton;
