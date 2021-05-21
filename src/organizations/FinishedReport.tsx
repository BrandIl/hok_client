import * as React from 'react';
import { FC } from 'react';
import DollarIcon from '@material-ui/icons/AttachMoney';
import { useTranslate } from 'react-admin';
import CardWithIcon from '../dashboard/CardWithIcon';


interface Props {
    value?: string;
}

const FinishedReport: FC<Props> = ({ value }) => {
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/agreement"
            icon={DollarIcon}
            title={translate('מסיימים')}
            subtitle={value}
        />
    );
};

export default FinishedReport;
