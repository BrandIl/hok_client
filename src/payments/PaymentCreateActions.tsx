import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useCallback } from "react";
import { TopToolbar } from "react-admin";
import { useHistory } from "react-router-dom";


export const PaymentCreateActions = (basePath: any, data: any, resource: any) => {
    const history = useHistory();

    const handleClose = useCallback(() => {
        history.push('/programs');
    }, [history]);

    return (<TopToolbar>
        <IconButton onClick={handleClose}>
            <CloseIcon />
        </IconButton>
    </TopToolbar>
    )
};
