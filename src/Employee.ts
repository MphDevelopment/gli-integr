export class Employee {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname:string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    toString():string{
        return name + " " + this.lastname;
    }
}