import { Lead } from './lead.model';

export interface Account{
    
    address_city: string;
    address_country: string;
    address_line_four: string;
    address_line_one: string;
    address_line_three: string;
    address_line_two: string;
    address_post_code: string;
    address_region: string;
    bank_acc_no: string;
    bill_cycle: string;
    business_name: string;
    confirmed: Date;
    creation_timestamp: Date;
    credit_control_status: string;
    email_address: string;
    escalated: boolean;
    escalated_text: string;
    first_name: string;
    last_changed: Date;
    last_name: string;
    leads: Lead[],
    mobile_number: string;
    monthly_payment_reference: string;
    payment_method: string;
    phone_number: string;
    reference: string;
    sort_code:string
}
