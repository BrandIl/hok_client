import { downloadCSV, useTranslate } from 'react-admin';
import jsonExport from 'jsonexport/dist';
import { Project } from '../utils/types';


export const ProjectExporter = (projects: Project[]) => {


    const projectsForExport = projects.map((project: Project) => {

        const { ...projectsForExport } = project; // omit backlinks and author
        // projectsForExport.author_name = project.author; // add a field
        return projectsForExport;
    });
    jsonExport(projectsForExport, {
        // headers: ['שם', 'איש קשר', 'טלפון', 'מייל'], // order fields in the export
        rename: ['שם', 'איש קשר', 'טלפון', 'מייל'],

    }, (err: Error, csv: any) => {
        downloadCSV(`\ufeff'${csv}`, 'projects'); // download as 'posts.csv` file
    });

};