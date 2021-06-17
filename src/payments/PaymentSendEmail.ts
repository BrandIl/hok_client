import { downloadCSV, useTranslate } from 'react-admin';
import jsonExport from 'jsonexport/dist';
import { Payment } from '../utils/types';

import React, { useState } from 'react';

declare const window: any;
export const TryEmail = () => {


    const translate = useTranslate();
    const [fromEmail, setFromEmail] = useState('rivkahalili18@gmail.com');
    const [toEmail, setToEmail] = useState('avr9061@gmail.com',);
    const [subject, setSubject] = useState('תתאפסי');
    const [title, setTitle] = useState('שלום, ');
    const [name, setName] = useState('תמר');
    const [message, setMessage] = useState('לאיפוס הסימסא הקש כאן');

    const handleSubmit = (event: any) => {
        const templateId = 'template_7ws82vl';
        sendFeedback(templateId, { fromEmail, toEmail, subject, title, name, message });
    }

    const sendFeedback = (templateId: any, variables: any) => {
        console.log(variables);
        window.emailjs.send(
            'service_4vjo8bd', templateId,
            variables
        ).then((res: any) => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch((err: any) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}

export const Email = (payments: Payment[]) => {

    const translate = useTranslate();
    const [fromEmail, setFromEmail] = useState('rivkahalili18@gmail.com');
    const [toEmail, setToEmail] = useState('avr9061@gmail.com',);
    const [subject, setSubject] = useState('תתאפסי');
    const [title, setTitle] = useState('שלום, ');
    const [name, setName] = useState('תמר');
    const [message, setMessage] = useState('לאיפוס הסימסא הקש כאן');

    const paymentsForExport = payments.map((payment: Payment) => {

        const { ...paymentsForExport } = payment; // omit backlinks and author
        // organizationsForExport.author_name = organization.author; // add a field
        return paymentsForExport;
    });


    jsonExport(paymentsForExport, {
        // headers: ['שם', 'איש קשר', 'טלפון', 'מייל'], // order fields in the export
        rename: ['שם', 'איש קשר', 'טלפון', 'מייל'],

    }, (err: Error, csv: any) => {
        downloadCSV(`\ufeff'${csv}`, 'programs'); // download as 'posts.csv` file
    });

};
