import { downloadCSV, useTranslate } from 'react-admin';
import jsonExport from 'jsonexport/dist';
import { Customer } from '../utils/types';


export const CustomerExporter = (customers: Customer[]) => {


    const customersForExport = customers.map((customer: Customer) => {

        const { ...customersForExport } = customer; // omit backlinks and author
        // customersForExport.author_name = customer.author; // add a field
        return customersForExport;
    });
    jsonExport(customersForExport, {
        // headers: ['שם', 'איש קשר', 'טלפון', 'מייל'], // order fields in the export
        rename: ['שם', 'איש קשר', 'טלפון', 'מייל'],

    }, (err: Error, csv: any) => {
        downloadCSV(`\ufeff'${csv}`, 'customers'); // download as 'posts.csv` file
    });

};