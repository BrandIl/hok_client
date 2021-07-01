import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { FC } from 'react';
import { BooleanField, ChipField, Datagrid, DatagridProps, EmailField, Identifier, ReferenceArrayField, SingleFieldList, TextField, useTranslate } from 'react-admin';
import rowStyle from './rowStyle';


const useListStyles = makeStyles({
    headerRow: {
        borderLeftColor: 'transparent',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    headerCell: {
        padding: '6px 8px 6px 8px',
    },
    rowCell: {
        padding: '6px 8px 6px 8px',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
});

export interface UserListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
}

const UserListDesktop: FC<UserListDesktopProps> = ({
    selectedRow,
    ...props
}) => {
    const classes = useListStyles();
    return (
        <Datagrid
            rowClick="edit"
            // @ts-ignore
            rowStyle={rowStyle(selectedRow)}
            classes={{
                headerRow: classes.headerRow,
                headerCell: classes.headerCell,
                rowCell: classes.rowCell,
            }}
            optimized
            {...props}>
            <TextField label="שם משתמש" source="name" />
            <EmailField label="כתובת מייל" source="email" />
            <BooleanField label="מנהל?" source="isAdmin" />
            <ReferenceArrayField label="ארגונים" reference="organizations" source="organizations">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    );
};

export default UserListDesktop;