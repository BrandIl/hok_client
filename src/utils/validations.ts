import {
    required, minLength, maxLength, email, regex,
    minValue, number, useTranslate
} from "react-admin"


export const validateNames = (min: number, max: number) => [required(), minLength(min), maxLength(max)]
export const validateEmail = [required(), email()]
export const validateDigits = (min: number, max: number) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translate = useTranslate();
    return [required(),
    regex(/^[0-9]+$/, translate('pos.validations.digits')), minLength(min), maxLength(max)]
}
export const validatePrice = [required(), minValue(1), number()]
export const expiringDate = [required()]
