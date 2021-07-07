import EnglishMessages from 'ra-language-english';
import { TranslationMessages } from 'react-admin';

const customEnglishMessages: TranslationMessages = {
    ...EnglishMessages,
    ra: {
        ...EnglishMessages.ra,
        navigation: {
            ...EnglishMessages.ra.navigation,
            skip_nav: 'skip'
        }
    },
    pos: {
        save: 'save',
        search: 'serch',
        configuration: 'configuration',
        language: 'language',
        theme: {
            name: 'theme',
            light: 'light',
            dark: 'dark',
        },
        dashboard: {

        },
        menu: {
            users: 'users',
            organizations: 'organizations',
            customers: 'customers',
            programs: 'programs',
            projects: 'projects',
            payments: 'payments',
            dashboard: 'dashboard',
            reports: 'reports',
            configurations: 'configurations',
            collection: 'collection'
        },
        validations: {
            digits: 'may contains only digits'
        },
    },
    resources: {
        organizations: {
            name: ' organization |||| organizations',
            fields: {
                name: 'organization name',
                communication: {
                    address: {
                        city: {
                            zip: 'zip',
                            name: 'city'
                        },
                        street: {
                            name: 'street',
                            number: 'number'
                        }
                    },
                    concats: {
                        name: 'concat',
                        celular: 'celular',
                        email: 'email',
                        remarks: 'remarks',
                    },
                },
                masavData: {
                    credit: {
                        codeNosse: 'codeNosse',
                        senderCode: 'senderCode',
                    },
                    charge: {
                        codeNosse: 'codeNosse',
                        senderCode: 'senderCode',
                    }
                },

                paymentAgreement: {
                    minPrice: 'minPrice',
                    feePerUnit: 'feePerUnit',
                    paymentMethod: {
                        bankAccount: {
                            bankId: 'bankId',
                            branchId: 'branchId',
                            accountNumber: 'accountNumber',
                        }
                    }
                }
            },
            titles: {
                create: 'Create new organization',
                edit: 'Edit an organization',
                show: '*****',
                address: 'Address',
                details: 'Communication',
                organization_name: 'Crganization name',
                organization_details: 'Crganization details',
                masav_details: 'Masav details',
                payment_method: 'Payment method',
                credits: 'Credits',
                charges: 'Charges',
                bank_account: 'Bank account ',
                cerdit_card: 'Cerdit card',
                payment: 'Payment',
            },
            notifications: {
                create_success: 'New organization have been created succsefuly! ',
                edit_success: 'The organization have been changed succsefuly!',
                save_error: 'Error',
            },
            details: 'organizatin etails'
        },
        projects: {
            name: 'project |||| projects',
            fields: {
                ordinalNumber: 'Project num',
                organizationId: 'organization',
                name: 'Project name',
            },
            titles: {
                create: 'Add new Project',
                edit: 'Edit a project',
                show: '*****',
            },
            notifications: {
                create_success: 'The project have been created succsefully!',
                edit_success: 'The project have been changed succsefully!',
                save_error: 'Error!',
            },
            details: 'Project details'
        },
        payments: {
            name: 'payment |||| payments',
            fields: {
                organizationId: 'organization',
                sum: 'sum',
                startDate: 'Open date',
                endDate: 'Close Date',
                numOfPayments: 'Num of payments',
                launchDay: 'Launch Day',
                paymentMethod: {
                    bankAccount: {
                        bankId: 'Bank Id',
                        branchId: 'Branch Id',
                        accountNumber: 'Account Number',
                    }
                },
                status: 'Status',
                projectId: 'Project',
                customerId: 'Customer Name',
                programId: 'Program Num',
                collectionDate: 'Collection date'

            },
            filter: {

            }
        },
        customers: {
            name: 'customer |||| customers',
            fields: {
                ordinalNumber: 'Customer num ',
                firstName: 'First Name',
                lastName: 'Last Name',
                identity: 'Identity',

                communication: {
                    address: {
                        city: {
                            name: 'city',
                            zip: 'zip',
                        },
                        street: {
                            name: 'street',
                            number: 'number',
                        }
                    },
                    email: 'email',
                    celular: 'celular',
                    remarks: 'remarks'

                },
                organizationId: 'organization',
            },
            filters: {
                projectId: "project"
            },
            details: 'customer details',
            fieldGroups: {
                personal_details: 'Personal details',
                address: 'address',
                communication: 'communication',
            },
            page: {
                delete: 'delete ',
            },
            errors: {
                password_mismatch:
                    'password mismatch',
            },
            notification: {
                create_success: 'Customer have been created!',
                create_error: ': Error %{error}',
                update_success: 'Customer have been edited',
                update_error: ': Error %{error}',
            },
        },
        users: {
            name: 'user |||| users',
            title: 'users %{reference}',
            fields: {
                name: 'username',
                email: 'email',
                password: 'password',
                isAdmin: 'isAdmin?',
                organizations: 'organizations',
            },
            details: 'Customer details'

        },
        programs: {
            name: 'program |||| programs',
            fields: {
                ordinalNumber: 'Program number',
                sum: 'sum',
                startDate: 'Open date',
                endDate: 'Close date',
                numOfPayments: 'Number of payments',
                launchDay: 'Launch day',
                paymentMethod: {
                    bankAccount: {
                        bankId: 'Bank Id',
                        branchId: 'Branch Id',
                        accountNumber: 'Account number',
                    }
                },
                organizationId: 'Organization',
                projectId: 'Project',
                customerId: 'Customer',
                isActive: 'isActive'

            },
            titles: {
                create: 'add a program',
            },
            filters: {
                active: 'active',
                cancel: 'cancel'
            },
            notifications: {
                create_success: 'The program have been created',
                edit_success: 'The program have been edited ',
                save_error: 'Error!',
                cancel_success: 'The programs have been canceld',
                cancel_error: 'Error!\n Trt again!',
                active_success: 'The programs have been activated',
                active_error: 'Error!\n Trt again!',
            },
            action: {
                active: 'active',
                cancel: 'cancel',
            },
            fieldGroups: {
                customer_details: 'Customer details',
                collection_details: 'Collection details',
                bank_account: 'Bank account',
                credit_card: 'Credit card'
            },
        },
        reports: {
            name: 'Report |||| Reports',
            fields: {
                masav_report: 'Masav File',
                name: 'Name',
            },

            titles: {
                create: 'add',
                edit: 'edit',
                show: '*****',
            },
            notifications: {
                create_success: 'The program have been created successfuly',
                edit_success: 'The Program have been edited succsessfully',
                save_error: 'Error!',
            },
        },
        agreement: {
            launchCollection: 'Launch Collection for date:',
            notifications: {
                collect_success: 'The collection launch successfully ',
                collect_error: 'Error!',
            },
        }
    }
};

export default customEnglishMessages;
