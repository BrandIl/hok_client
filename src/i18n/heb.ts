import HebrewMessages from 'ra-language-hebrew-il';
import { TranslationMessages } from 'react-admin';

const customFrenchMessages: TranslationMessages = {
    ...HebrewMessages,
    ra: {
        ...HebrewMessages.ra,
        navigation: {
            ...HebrewMessages.ra.navigation,
            skip_nav: 'עבור'
        }
    },
    pos: {
        save: 'שמור',
        search: 'חיפוש',
        configuration: 'הגדרות',
        language: 'שפה',
        theme: {
            name: 'ערכת נושא',
            light: 'בהיר',
            dark: 'כהה',
        },
        dashboard: {
            charges: 'חיובים',
            credits: 'זיכויים',
            order: {
                items:
                    'par %{customer_name}, un poster |||| par %{customer_name}, %{nb_items} posters',
            },
            welcome: {
                title: 'Bienvenue sur la démo e-commerce de react-admin',
                subtitle:
                    "Ceci est le back-office d'un magasin de posters imaginaire. N'hésitez pas à explorer et à modifier les données. La démo s'exécute en local dans votre navigateur, et se remet à zéro chaque fois que vous rechargez la page.",
                ra_button: 'Site web de react-admin',
                demo_button: 'Code source de cette démo',
            },
        },
        menu: {
            users: 'משתמשים',
            organizations: 'מוסדות',
            customers: 'לקוחות',
            programs: 'תוכניות',
            projects: 'פרויקטים',
            payments: 'תשלומים',
            dashboard: 'תפריט ראשי',
            reports: 'דוחות',
            configurations: 'הגדרות'
        },
        validations: {
            digits: 'יכול להכיל רק ספרות'
        },
    },
    resources: {
        organizations: {
            name: ' מוסד |||| מוסדות',
            fields: {
                name: 'שם המוסד',
                communication: {
                    address: {
                        city: {
                            zip: 'מיקוד',
                            name: 'עיר'
                        },
                        street: {
                            name: 'רחוב',
                            number: 'מספר'
                        }
                    },
                    concats: {
                        name: 'איש קשר',
                        celular: 'מספר טלפון',
                        email: 'כתובת מייל',
                        remarks: 'הערות',
                    },
                },
                masavData: {
                    credit: {
                        codeNosse: 'קוד זיכוי',
                        senderCode: 'קוד שולח',
                    },
                    charge: {
                        codeNosse: 'קוד חיוב',
                        senderCode: 'קוד שולח',
                    }
                },

                paymentAgreement: {
                    minPrice: 'מחיר מינימום',
                    feePerUnit: 'מחיר ליחידה',
                    paymentMethod: {
                        bankAccount: {
                            bankId: 'מזהה בנק',
                            branchId: 'מספר סניף',
                            accountNumber: 'מספר חשבון',
                        }
                    }
                }
            },
            titles: {
                create: 'הוספת מוסד',
                edit: 'עריכת מוסד',
                show: '*****',
                address: 'כתובת',
                details: 'יצירת קשר',
                organization_name: 'שם מוסד',
                organization_details: 'פרטי מוסד',
                masav_details: 'פרטי מס"ב',
                payment_method: 'שיטת תשלום',
                credits: 'זיכויים',
                charges: 'חיובים',
                bank_account: 'חשבון בנק',
                cerdit_card: 'כרטיס אשראי',
                payment: 'תשלום',
            },
            notifications: {
                create_success: '!המוסד נוצר בהצלחה',
                edit_success: 'המוסד השתנה בהצלחה!',
                save_error: '!שגיאה',
            },
            details: 'פרטי מוסד'
        },
        projects: {
            name: 'פרויקט |||| פרויקטים',
            fields: {
                ordinalNumber: 'מספר פרויקט',
                organizationId: 'מוסד',
                name: 'שם פרויקט',
            },
            titles: {
                create: 'הוספת פרויקט',
                edit: 'עריכת פרויקט',
                show: '*****',
            },
            notifications: {
                create_success: '!הפרויקט נוצר בהצלחה',
                edit_success: 'הפרויקט השתנה בהצלחה!',
                save_error: '!שגיאה',
            },
            details: 'פרטי פרויקט'
        },
        payments: {
            name: 'תשלום |||| תשלומים',
            fields: {
                organizationId: 'מוסד',
                name: 'שם פרויקט',
                sum: 'סכום לגביה',
                startDate: 'תאריך פתיחה',
                endDate: 'תאריך סיום',
                numOfPayments: 'מספר תשלומים',
                launchDay: 'יום גביה',
                paymentMethod: {
                    bankAccount: {
                        bankId: 'מזהה בנק',
                        branchId: 'מספר סניף',
                        accountNumber: 'מספר חשבון',
                    }
                },
                status: 'מצב',
                projectId: 'פרויקט',
                customerId: 'שם לקוח',
                programId: 'מספר תוכנית',

            },
            filter: {

            }
        },
        customers: {
            name: 'לקוח |||| לקוחות',
            fields: {
                ordinalNumber: 'מספר לקוח',
                firstName: 'שם פרטי',
                lastName: 'שם משפחה',
                identity: 'מספר זהות',

                communication: {
                    address: {
                        city: {
                            name: 'עיר',
                            zip: 'מיקוד',
                        },
                        street: {
                            name: 'רחוב',
                            number: 'מספר רחוב',
                        }
                    },
                    email: 'כתובת מייל',
                    celular: 'נייד',
                    remarks: 'הערות'

                },
                organizationId: 'מוסד',
            },
            filters: {
                projectId: "פרויקט"
            },
            details: 'פרטי לקוח',
            fieldGroups: {
                personal_details: 'פרטים אישיים',
                address: 'כתובת',
                communication: 'יצירת קשר',
            },
            page: {
                delete: 'מחק לקוח',
            },
            errors: {
                password_mismatch:
                    'הסיסמאות לא זהות.',
            },
            notification: {
                create_success: 'הלקוח נוסף בהצלחה!',
                create_error: ': שגיאה %{error}',
                update_success: 'הלקוח עודכן בהצלחה!',
                update_error: ': שגיאה %{error}',
            },
        },
        users: {
            name: 'משתמש |||| משתמשים',
            title: 'משתמשים°%{reference}',
            fields: {
                name: 'שם משתמש',
                email: 'מייל',
                password: 'סיסמא',
                isAdmin: 'מנהל מערכת?',
                organizations: 'מוסדות',
            },
            details: 'פרטי משתמש'

        },
        programs: {
            name: 'תוכנית |||| תוכניות',
            fields: {
                ordinalNumber: 'מספר תוכנית',
                sum: 'סכום לגביה',
                startDate: 'תאריך פתיחה',
                endDate: 'תאריך סיום',
                numOfPayments: 'מספר תשלומים',
                launchDay: 'יום גביה',
                paymentMethod: {
                    bankAccount: {
                        bankId: 'מזהה בנק',
                        branchId: 'מספר סניף',
                        accountNumber: 'מספר חשבון',
                    }
                },
                organizationId: 'מוסד',
                projectId: 'פרויקט',
                customerId: 'לקוח',
                isActive: 'פעיל'

            },
            titles: {
                create: 'הוספת תכנית',
                details: 'Détails',
                description: 'Description',
                reviews: 'Commentaires',
            },
            filters: {
                active: 'פעיל',
                cancel: 'מבוטל'
            },
            notifications: {
                create_success: '!התכנית נוצרה בהצלחה',
                edit_success: 'התכנית התעדכנה בהצלחה!',
                save_error: '!שגיאה',
                cancel_success: 'התכניות בוטלו בהצלחה',
                cancel_error: 'ארעה שגיאה!\n נסה שוב ',
                active_success: 'התכנית הופעלה בהצלחה',
                active_error: 'ארעה שגיאה!\n נסה שוב ',
            },
            action: {
                active: 'חדש',
                cancel: 'בטל',
            },
            fieldGroups: {
                customer_details: 'פרטי תכנית',
                collection_details: 'פרטי גביה',
                bank_account: 'חשבון בנק',
                credit_card: 'כרטיס אשראי'
            },
        },
        reports: {
            name: 'דוח |||| דוחות',
            fields: {
                masav_report: 'דוח מס"ב',
                name: 'שם פרויקט',
            },

            titles: {
                create: 'הוספת פרויקט',
                edit: 'עריכת פרויקט',
                show: '*****',
            },
            notifications: {
                create_success: '!הפרויקט נוצר בהצלחה',
                edit_success: 'הפרויקט השתנה בהצלחה!',
                save_error: '!שגיאה',
            },
        },
    }
};

export default customFrenchMessages;
