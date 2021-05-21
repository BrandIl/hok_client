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
        phone: string;
        email: string;
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
            ;
            creditCard: {
                creditNumber: number;
                expiringDate: string;
                cvv2: string;
            };
        }
    };
}


export interface Project extends Record {
    name: string;
}

export interface Program extends Record {
    sum: string;
    startDate: Date;
    numOfPayments: number;
    launchDay: number,
    //   paymentMethod: PaymentMethod,
    organizationId: Identifier,
    projectId: Identifier,
    customerId: Identifier
}

export interface Customer extends Record {
    first_name: string;
    last_name: string;
    address: string;
    stateAbbr: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    first_seen: string;
    last_seen: string;
    has_ordered: boolean;
    latest_purchase: string;
    has_newsletter: boolean;
    groups: string[];
    nb_commands: number;
    total_spent: number;
}


export type OrderStatus = 'ordered' | 'delivered' | 'cancelled';

export interface Order extends Record {
    status: OrderStatus;
    basket: BasketItem[];
    date: Date;
    total: number;
}

export interface BasketItem {
    product_id: Identifier;
    quantity: number;
}

export interface Invoice extends Record { }

export type ReviewStatus = 'accepted' | 'pending' | 'rejected';

export interface Review extends Record {
    date: Date;
    status: ReviewStatus;
    customer_id: Identifier;
    product_id: Identifier;
}

declare global {
    interface Window {
        restServer: any;
    }
}
