import React, { useState } from 'react';
import { useTranslate } from 'react-admin';

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



    return (
        <form className="test-mailing">
            <h1>Let's see if it works</h1>
            <div>
                <input
                    type="email"
                    id="test-mailing"
                    name="test-mailing"
                    onChange={e => setFromEmail(e.target.value)}
                    placeholder="הכנס מייל"
                    required
                    value={fromEmail}
                />
                <input
                    type="email"
                    id="test-mailing"
                    name="test-mailing"
                    onChange={e => setToEmail(e.target.value)}
                    placeholder="הכנס מייל"
                    required
                    value={toEmail}
                />
                <textarea
                    id="test-mailing"
                    name="test-mailing"
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Post some lorem ipsum here"
                    required
                    value={message}
                    style={{ width: '100%', height: '150px' }}
                />

            </div>
            <input type="button" value="Submit" className="btn btn--submit" onClick={handleSubmit} />
        </form>
    )
}







