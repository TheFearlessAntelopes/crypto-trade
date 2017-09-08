export class User {
    _id: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    email: string;
    balance: number;
    currencies: Array<{}>;
}
