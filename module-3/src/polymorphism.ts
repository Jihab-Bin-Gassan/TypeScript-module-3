// polymorphism: different employees respond differently to the same method call.

// ================================================================

// class Employee {
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

//   // parent parameter is first priority. you can't take parameter in child without adding parameter in parent function.
//   calculatePay(taxRate: number) {
//     return this.baseSalary - this.baseSalary * taxRate;
//   }
// }

// // class Manager extends Employee {} // if the constructor same as parent class. then don't need to call full of this later.

// class Manager extends Employee {
//   // typeScript support override. But they don't support overload.
//   // remember you can't take parameter only in child without parent parameter.
//   override calculatePay() {
//     // override function must need to be compatible with parent function signature. like if parent return string, then you must need to return string. Also parameter need to be compatible like this.
//     return this.baseSalary + 5000;
//   }
// }

// class Developer extends Employee {
//   constructor(
//     name: string,
//     _baseSalary: number,
//     public type: string,
//   ) {
//     super(name, _baseSalary);
//   }

//   override calculatePay(taxRate: number) {
//     return this.baseSalary + 3000 - this.baseSalary * taxRate;
//   }
// }

// const employee = new Employee('mir', 20000);
// const manager = new Manager('mir', 20000);
// const developer = new Developer('Priti', 20000, 'Backend');

// console.log(employee.calculatePay(0.1));
// console.log(manager.calculatePay());
// console.log(developer.calculatePay(0.1));
