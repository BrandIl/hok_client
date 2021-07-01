import jsonExport from 'jsonexport/dist';
import { downloadCSV } from 'react-admin';
import { Customer } from '../utils/types';


export const CustomerExporter = (records: Customer[], fetchRelatedRecords: any) => {

    fetchRelatedRecords(records, 'organizationId', 'organizations').then((organizations: any) => {

        const customersForExport = records.map(project => {
            const { id, __v, ...customersForExport } = project; // omit backlinks and author
            return customersForExport;
        });

        const data = customersForExport.map(record => ({
            ...record,
            organizationId: organizations[record.organizationId].name
        }));



        jsonExport(data, {
            headers: [
                'organizationId',
                'firstName',
                'lastName',
                'identity',
                'communication.address.city.name',
                'communication.address.city.zip',
                'communication.address.street.name',
                'communication.address.street.number',
                'communication.email',
                'communication.celular',
                'communication.remarks'
            ], // order fields in the export
            rename: ['שם מוסד', 'שם פרטי', 'שם משפחה', 'מספר זהות', 'עיר', 'מיקוד', 'רחוב', 'מספר רחוב', 'מייל', 'נייד', 'הערות',],

        }, (err: Error, csv: any) => {
            downloadCSV(`\ufeff'${csv}`, 'customers'); // download as 'customers.csv` file
        });
    });



};