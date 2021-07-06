import jsonExport from 'jsonexport/dist';
import { downloadCSV } from 'react-admin';
import { User } from '../utils/types';


export const UserExporter = (records: User[], fetchRelatedRecords: any) => {

    fetchRelatedRecords(records, 'organizations', 'organizations').then((organizations: any) => {

        const usersForExport = records.map(user => {
            const { id, __v, ...usersForExport } = user; // omit backlinks and author
            return usersForExport;
        });

        const data = usersForExport.map(record => ({
            ...record,
            // organizationId: organizations[record.organizationId].name
        }));



        jsonExport(data, {
            headers: ['name', 'email', 'isAdmin', 'organizations'], // order fields in the export
            rename: ['שם משתמש', 'מייל', 'מנהל', 'מוסדות'],

        }, (err: Error, csv: any) => {
            downloadCSV(`\ufeff'${csv}`, 'users'); // download as 'users.csv` file
        });
    });


};