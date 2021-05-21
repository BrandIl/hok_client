import * as React from 'react';
import { FC } from 'react';
import DollarIcon from '@material-ui/icons/AttachMoney';
import { useTranslate } from 'react-admin';
import CardWithIcon from '../dashboard/CardWithIcon';


interface Props {
    value?: string;
}

const CollectionReport: FC<Props> = ({ value }) => {
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/reports"
            icon={DollarIcon}
            title={translate('דוח גביה')}
            subtitle={value}
        />
    );
};

export default CollectionReport;
