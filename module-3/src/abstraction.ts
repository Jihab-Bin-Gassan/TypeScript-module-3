// Abstraction: every employee must define how their pay is calculated.

// ==========================================================
// // abstract is missing in raw javascript. but you can use it in typeScript.

// abstract class Employee {
//   constructor(
//     public name: string,
//     protected _baseSalary: number,
//   ) {}

//   get baseSalary(): number {
//     return this._baseSalary;
//   }

//   set baseSalary(newSalary: number) {
//     if (newSalary < 0) {
//       throw new Error('Salary can not be negative value.');
//     }
//     this._baseSalary = newSalary;
//   }

//   abstract calculatePay(): number;
//   abstract getResources(): string[];
//   abstract registerEntryTime(): string;
// }

// // const employee = new Employee('aldhfjh'); // you can't initiate a abstract class like this.

// // need to require every abstracted function here. Otherwise you will get error.
// class Manager extends Employee {
//   calculatePay() {
//     return this.baseSalary + 5000;
//   }
// }

// // need to require every abstracted function here. Otherwise you will get error.
// class Developer extends Employee {
//   calculatePay() {
//     return this.baseSalary + 5000;
//   }
// }
