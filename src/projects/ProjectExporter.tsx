import jsonExport from 'jsonexport/dist';
import { downloadCSV } from 'react-admin';
import { Project } from '../utils/types';


export const ProjectExporter = (records: Project[], fetchRelatedRecords: any) => {

    fetchRelatedRecords(records, 'organizationId', 'organizations').then((organizations: any) => {

        const projectsForExport = records.map(project => {
            const { id, __v, ...projectsForExport } = project; // omit backlinks and author
            return projectsForExport;
        });

        const data = projectsForExport.map(record => ({
            ...record,
            organizationId: organizations[record.organizationId].name
        }));



        jsonExport(data, {
            headers: ['organizationId', 'name'], // order fields in the export
            rename: ['שם מוסד', 'שם פרויקט'],

        }, (err: Error, csv: any) => {
            downloadCSV(`\ufeff'${csv}`, 'projects'); // download as 'projects.csv` file
        });
    });


};