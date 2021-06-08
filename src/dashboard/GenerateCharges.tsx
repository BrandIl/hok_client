import CreditCardIcon from '@material-ui/icons/CreditCard';
import * as React from 'react';
import { FC } from 'react';
import { useTranslate } from 'react-admin';
import CardWithIcon from './CardWithIcon';


interface Props {
    value?: string;
}

const GenerateCharges: FC<Props> = ({ value }) => {
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/agreement"
            icon={CreditCardIcon}
            title={translate('זיכויים')}
            subtitle={value}
        />
    );
};

export default GenerateCharges;
