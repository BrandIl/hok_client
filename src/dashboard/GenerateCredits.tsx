import * as React from 'react';
import { FC } from 'react';
import DollarIcon from '@material-ui/icons/AttachMoney';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: string;
}

const GenerateCredits: FC<Props> = ({ value }) => {
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/agreement"
            icon={DollarIcon}
            title={translate('חיובים')}
            subtitle={value}
        />
    );
};

export default GenerateCredits;
