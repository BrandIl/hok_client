import { downloadCSV, useTranslate } from 'react-admin';
import jsonExport from 'jsonexport/dist';
import { Organization } from '../utils/types';


export const exporter = (organizations: Organization[]) => {


    const programsForExport = organizations.map((organization: Organization) => {

        const { ...programsForExport } = organization; // omit backlinks and author
        // organizationsForExport.author_name = organization.author; // add a field
        return programsForExport;
    });


    jsonExport(programsForExport, {
        // headers: ['שם', 'איש קשר', 'טלפון', 'מייל'], // order fields in the export
        rename: ['שם', 'איש קשר', 'טלפון', 'מייל'],

    }, (err: Error, csv: any) => {
        downloadCSV(`\ufeff'${csv}`, 'programs'); // download as 'posts.csv` file
    });

};