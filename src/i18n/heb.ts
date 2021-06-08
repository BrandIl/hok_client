import HebrewMessages from 'ra-language-hebrew-il';
import { TranslationMessages } from 'react-admin';

const customFrenchMessages: TranslationMessages = {
    ...HebrewMessages,
    pos: {
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
                    dayOfCharge: 'יום גביה',
                    paymentMethod: {
                        bankAccount: {
                            bankId: 'מזהה בנק',
                            branchId: 'מספר סניף',
                            accountNumber: 'מספר חשבון',
                        }
                        ,
                        creditCard: {
                            creditNumber: 'מספר כרטיס',
                            expiringDate: 'תוקף',
                            cvv2: 'cvv',
                        },
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
                organizationId: {
                    name: 'מוסד'
                },
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
        customers: {
            name: 'לקוח |||| לקוחות',
            fields: {
                firstName: 'שם פרטי',
                lastName: 'שם משפחה',
                identity: 'מספר זהות',
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
                communication: {
                    email: 'כתובת מייל',
                    celular: 'נייד',

                },
                organizationId: 'מוסד',
            },
            filters: {

            },
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
                name: 'Adresse',
                mail: 'Client',
                password: 'Emises depuis',
                permission: 'Emises avant',
                nb_items: 'Nb articles',
                reference: 'Référence',
                returned: 'Annulée',
                status: 'Etat',
                total_gte: 'Montant minimum',
            },
            section: {
                order: 'Commande',
                customer: 'Client',
                shipping_address: 'Adresse de livraison',
                items: 'Articles',
                total: 'Total',
            },
        },
        programs: {
            name: 'תוכנית |||| תוכניות',
            fields: {
                sum: 'סכום לגביה',
                startDate: 'תאריך התחלה',
                endDate: 'תאריך סיום',
                numOfPayments: 'מספר תשלומים',
                launchDay: 'יום גביה',
                paymentMethod: {
                    bankAccount: {
                        bankId: 'מזהה בנק',
                        branchId: 'מספר סניף',
                        accountNumber: 'מספר חשבון',
                    }
                    ,
                    creditCard: {
                        creditNumber: 'מספר כרטיס',
                        expiringDate: 'תוקף',
                        cvv2: 'cvv',
                    },
                },
                organizationId: 'מוסד',
                projectId: 'פרויקט',
                customerId: 'לקוח',

            },
            titles: {
                create: 'הוספת תכנית',
                details: 'Détails',
                description: 'Description',
                reviews: 'Commentaires',
            },
            filters: {
                categories: 'Catégories',
                stock: 'Stock',
                no_stock: 'En rupture',
                low_stock: '1 - 9 unités',
                average_stock: '10 - 49 unités',
                enough_stock: '50 unités et plus',
                sales: 'Ventes',
                best_sellers: 'Meilleures ventes',
                average_sellers: 'Moyennes',
                low_sellers: 'Peu vendu',
                never_sold: 'Jamais vendu',
            },
            notifications: {
                create_success: '!התכנית נוצרה בהצלחה',
                edit_success: 'התכנית התעדכנה בהצלחה!',
                save_error: '!שגיאה',
            },
            fieldGroups: {
                customer_details: 'פרטי תכנית',
                collection_details: 'פרטי גביה',
                bank_account: 'חשבון בנק',
                credit_card: 'כרטיס אשראי'
            },
        },
    }
};

export default customFrenchMessages;
