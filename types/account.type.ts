export type AccountRole = "ADMIN" | "USER"
export type AccountStatus = "ACTIVE" | "INACTIVE" 
export type Account = {
    id: string;
    role: AccountRole;
    status: AccountStatus;
    email: string;
    createdAt: Date;
}

export type Profile = {
    id: string;
    fullname: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    birthday: string;
}