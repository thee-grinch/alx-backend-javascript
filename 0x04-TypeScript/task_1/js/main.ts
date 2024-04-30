interface Teacher {
    [key: string]: any;
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

interface Director extends Teacher {
    numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => {
    return '${firstName[0]}. ${lastName}';
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface Student {
    [key: string]: any;
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements Student{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}
interface constructor {
    (firstName: string, lastName: string): void
}
