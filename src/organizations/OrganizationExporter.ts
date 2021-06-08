import { downloadCSV, useTranslate } from 'react-admin';
import jsonExport from 'jsonexport/dist';
import { Organization } from '../utils/types';


export const OrganizationExporter = (organizations: Organization[]) => {


    const organizationsForExport = organizations.map((organization: Organization) => {

        const { ...organizationsForExport } = organization; // omit backlinks and author
        // organizationsForExport.author_name = organization.author; // add a field
        return organizationsForExport;
    });
    jsonExport(organizationsForExport, {
        // headers: ['שם', 'איש קשר', 'טלפון', 'מייל'], // order fields in the export
        rename: ['שם', 'איש קשר', 'טלפון', 'מייל'],

    }, (err: Error, csv: any) => {
        downloadCSV(`\ufeff'${csv}`, 'organizations'); // download as 'posts.csv` file
    });

};