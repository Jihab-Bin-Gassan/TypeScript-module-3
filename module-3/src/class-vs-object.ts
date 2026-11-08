// ==================================================== understanding the class and object.
// ========================================= manually making object
// interface Employee {
//   name: string;
//   baseSalary: number;
// }

// const employee: Employee = {
//   name: 'mir',
//   baseSalary: 22000,
// };

// const employee2: Employee = {
//   name: 'mizan',
//   baseSalary: 22000,
//   asdfas: 'asdfas',
// };

// ========================================= making object with class
// class Employee {
//   name: string = 'mir'; // it's a wrong approach
//   baseSalary: number = 22000; // it's a wrong approach
// }

// ========================================= correct approach
// class Employee {
//   name: string;
//   baseSalary: number;

//   constructor(name: string, baseSalary: number) {
//     this.name = name; // need to write 'this' keyword otherwise you will get an error. 'this' indicate 'name: string' if you don't write 'this' it can't indicate them properly.
//     this.baseSalary = baseSalary; // need to write 'this' keyword otherwise you will get an error. 'this' indicate 'name: string' if you don't write 'this' it can't indicate them properly.
//   }
// }

// const employee = new Employee('mir', 22000); // If you want to use any type of class you need to use 'new' then call function like this: "example()"

// const employee2 = new Employee('mizan', 24000);

// console.log(employee);
// console.log(employee2);
// console.log(employee instanceof Employee);
// console.log(employee2 instanceof Employee);
