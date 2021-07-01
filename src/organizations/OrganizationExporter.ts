import { downloadCSV, useTranslate } from 'react-admin';
import jsonExport from 'jsonexport/dist';
import { Organization } from '../utils/types';


export const OrganizationExporter = (organizations: Organization[]) => {


    const organizationsForExport = organizations.map((organization: Organization) => {
        const { id, __v, ...organizationsForExport } = organization; // omit backlinks and author
        return organizationsForExport;
    });
    jsonExport(organizationsForExport, {
        headers: ['name',
            'communication.address.city.name',
            'communication.address.city.zip',
            'communication.address.street.name',
            'communication.address.street.number',
            'communication.concats.name',
            'communication.concats.celular',
            'communication.concats.email',
            'communication.concats.remarks',
            'masavData.charge.codeNosse',
            'masavData.charge.senderCode',
            'paymentAgreement.minPrice',
            'paymentAgreement.feePerUnit',
            'paymentAgreement.paymentMethod.bankAccount.bankId',
            'paymentAgreement.paymentMethod.bankAccount.branchId',
            'paymentAgreement.paymentMethod.bankAccount.accountNumber',
            'masavData.credit.codeNosse',
            'masavData.credit.senderCode',
        ], // order fields in the export
        rename: ['שם המוסד', 'עיר', 'מיקוד', 'רחוב', 'מספר', 'איש קשר', 'מספר טלפון', 'כתובת מייל', 'הערות', 'קוד חיוב', 'קוד שולח', 'מחיר מינימום', 'מחיר ליחידה', 'מזהה בנק', 'מספר סניף', 'מספר חשבון', 'קוד שולח', 'קוד חיוב'],

    }, (err: Error, csv: any) => {
        downloadCSV(`\ufeff'${csv}`, 'organizations'); // download as 'posts.csv` file
    });

};