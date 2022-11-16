export enum Gender {
    male = "male",
    female = "female",
    unknown = "unknown"
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

    /* constructor(id: string, firstName: string, lastName: string, gender: Gender, username: string, email: string, birthDate: Date, password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName
        this.username = username;
        this.gender = gender;
        this.email = email;
        this.birthDate = birthDate;
        this.password = password;
    } */
}