interface Student {
    [key: string]: any; // [key: string] is used to allow any key of type string
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    location: 'New York'
};
let student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'California'
};
const studentsList: Array<Student> = [student1, student2];
const table = document.createElement('table');
document.body.appendChild(table);
const header = document.createElement('tr');
table.appendChild(header);
const headers = ['First Name', 'Last Name', 'Age', 'Location'];
headers.forEach((headerName) => {
    const cell = document.createElement('th');
    cell.innerHTML = headerName;
    header.appendChild(cell);
});
studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    table.appendChild(row);
    for (const key in student) {
        const cell = document.createElement('td');
        cell.innerHTML = student[key];
        row.appendChild(cell);
    }
});