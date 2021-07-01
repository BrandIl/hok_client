import { ReduxState, Record, Identifier } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface AppState extends ReduxState {
    theme: ThemeName;
}

export interface Organization extends Record {
    name: string;
    communication: {
        address: {
            city: {
                zip: string;
                name: string;
            },
            street: {
                name: string;
                number: string;
            }
        },
        concats: {
            name: string;
            celular: string;
            email: string;
            remarks: string;
        };
    }
    masavData: {
        credit: {
            codeNosse: string;
            senderCode: string;
        }
        charge: {
            codeNosse: string;
            senderCode: string;
        }
    };

    paymentAgreement: {
        minPrice: number;
        feePerUnit: number;
        dayOfCharge: number;
        paymentMethod: {
            bankAccount: {
                bankId: number;
                branchId: number
                accountNumber: string;
            }
        }
    };
}


export interface Project extends Record {
    organizationId: Identifier,
    name: string;
}

export interface Program extends Record {
    sum: string;
    startDate: string;
    endDate: string;
    numOfPayments: number;
    launchDay: number,
    paymentMethod: {
        bankAccount: {
            bankId: string;
            branchId: string;
            accountNumber: string;
        }
    },
    organizationId: Identifier,
    projectId: Identifier,
    customerId: Identifier,
    isActive: boolean
}

export interface Payment extends Record {
    sum: string;
    startDate: Date;
    endDate: Date;
    numOfPayments: number;
    launchDay: number,
    paymentMethod: {
        bankAccount: {
            bankId: string;
            branchId: string;
            accountNumber: string;
        }
    },
    organizationId: Identifier,
    projectId: Identifier,
    customerId: Identifier,
    programId: Identifier,
    status: boolean
}


export interface Customer extends Record {
    firstName: string;
    lastName: string;
    identity: string;
    address: {
        city: {
            name: string;
            zip: string;
        };
        street: {
            name: string;
            number: string;
        }
    };
    communication: {
        email: string;
        celular: string;

    }
    organizationId: Identifier;
}


export interface User extends Record {
    isAdmin: boolean,
    organizations: [string],
    name: string,
    email: string
}

