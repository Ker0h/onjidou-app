export enum Gender {
    male = "Male",
    female = "Female",
    unknown = "Unknown"
}

export class User {
    id!: string;
    firstName!: string;
    lastName!: string;
    gender !: Gender;
    username!: string;
    email!: string;
    birthDate!: Date; 
    password!: string;

    constructor() {}
}