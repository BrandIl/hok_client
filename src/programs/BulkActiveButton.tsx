import * as React from 'react';
import { FC } from 'react';
import PropTypes from 'prop-types';
import ThumbUp from '@material-ui/icons/ThumbUp';

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

const BulkActiveButton: FC<BulkActionProps> = ({
    selectedIds = noSelection,
}) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const unselectAll = useUnselectAll('programs');

    const [active, { loading }] = useUpdateMany(
        'programs',
        selectedIds,
        { isActive: true },
        {
            action: CRUD_UPDATE_MANY,
            undoable: true,
            onSuccess: () => {
                notify(
                    'resources.programs.notification.active_success',
                    'info',
                    {},
                    true
                );
                refresh();
                unselectAll();
            },
            onFailure: () => {
                notify(
                    'resources.programs.notification.active_error',
                    'warning'
                );
            },
        }
    );

    return (
        <Button
            label="resources.programs.action.active"
            onClick={active}
            disabled={loading}
        >
            <ThumbUp />
        </Button>
    );
};

BulkActiveButton.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BulkActiveButton;
