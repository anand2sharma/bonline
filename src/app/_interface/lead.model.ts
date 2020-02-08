export interface Lead{
    id: string;
    partner_id: string;
    business: string;
    confirmed: Date;
    creation_timestamp: Date;
    customer_name: string;
    customer_phone: string;
    email: string;
    kind: string;
    mobile_phone: string;
    sales_person: string;
    sold: Date;
    source: string;
    status: string;
}