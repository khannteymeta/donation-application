export declare enum UserRole {
    DONOR = "donor",
    ADMIN = "admin",
    STAFF = "staff"
}
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: UserRole;
    created_at: Date;
    constructor(user: Partial<User>);
}
