import jsonExport from 'jsonexport/dist';
import { downloadCSV } from 'react-admin';
import { Organization } from '../utils/types';


export const exporter = (records: Organization[], fetchRelatedRecords: any) => {
    fetchRelatedRecords(records, 'organizationId', 'organizations').then((organizations: any) => {
        fetchRelatedRecords(records, 'projectId', 'projects').then((projects: any) => {
            fetchRelatedRecords(records, 'customerId', 'customers').then((customers: any) => {

                const programsForExport = records.map(program => {
                    const { id, __v, ...programsForExport } = program; // omit backlinks and author
                    return programsForExport;
                });

                const data = programsForExport.map(record => ({
                    ...record,
                    organizationId: organizations[record.organizationId].name,
                    projectId: projects[record.projectId].name,
                    customerId: `${customers[record.customerId].lastName}  ${customers[record.customerId].firstName}`,
                    identity: customers[record.customerId].identity as string
                }));



                jsonExport(data, {
                    headers: [
                        'organizationId',
                        'projectId',
                        'customerId',
                        'identity',
                        'sum',
                        'startDate',
                        'endDate',
                        'numOfPayments',
                        'launchDay',
                        'paymentMethod.bankAccount.bankId',
                        'paymentMethod.bankAccount.branchId',
                        'paymentMethod.bankAccount.accountNumber',
                        'isActive'
                    ], // order fields in the export
                    rename: ['שם מוסד', 'שם פרטי', 'שם משפחה', 'מספר זהות', 'סכום', 'תאריך פתיחה', 'תאריך סיום', 'מספר תשלומים', 'יום גביה', 'מזהה בנק', 'מספר סניף', 'מספר חשבון', 'פעיל?'],

                }, (err: Error, csv: any) => {
                    downloadCSV(`\ufeff'${csv}`, 'programs'); // download as 'programs.csv` file
                });
            });
        });
    });

};