// ========================================= Encapsulation: protect a state and change it through methods.
// =========================================
// class Employee {
//   name: string;
//   _baseSalary: number; // using _baseSalary "_" is just a convention which means don't change it like this for just understanding of a developer. But it's not prevent the changing by program, it's not a keyword or anything else.
export {};
//   constructor(name: string, baseSalary: number) {
//     this.name = name; // need to write 'this' keyword otherwise you will get an error. 'this' indicate 'name: string' if you don't write 'this' it can't indicate them properly.
//     this._baseSalary = baseSalary; // need to write 'this' keyword otherwise you will get an error. 'this' indicate 'name: string' if you don't write 'this' it can't indicate them properly.
//     // using _baseSalary "_" is just a convention which means don't change it like this for just understanding of a developer. But it's not prevent the changing by program, it's not a keyword or anything else.
//   }
// }
// const employee = new Employee('mir', 22000); // If you want to use any type of class you need to use 'new' then call function like this: "example()"
// const employee2 = new Employee('mizan', 24000);
// console.log(employee);
// console.log(employee2);
// console.log(employee instanceof Employee);
// console.log(employee2 instanceof Employee);
// employee._baseSalary = -500; // using _baseSalary "_" is just a convention which means don't change it like this for just understanding of a developer. But it's not prevent the changing by program, it's not a keyword or anything else.
// console.log(employee._baseSalary); // using _baseSalary "_" is just a convention which means don't change it like this for just understanding of a developer. But it's not prevent the changing by program, it's not a keyword or anything else.
// =========================================
// traditional way.
// class Employee {
//   name: string;
//   #baseSalary: number; // If you use "#" before the property key. Then you can't change it later, the outside of class. It a private modifier of the class you can't change it outside of the class. But remember this it's a javascript method, not a trypeScript method. typeScript method is different.
//   constructor(name: string, baseSalary: number) {
//     this.name = name;
//     this.#baseSalary = baseSalary;
//   }
// }
// const employee = new Employee('mir', 22000);
// const employee2 = new Employee('mizan', 24000);
// console.log(employee);
// console.log(employee2);
// console.log(employee instanceof Employee);
// console.log(employee2 instanceof Employee);
// employee.#baseSalary = -500; // If you use "#" before the property key. Then you can't change it later, the outside of class. It a private modifier of the class you can't change it outside of the class. But remember this it's a javascript method, not a trypeScript method. typeScript method is different.
// console.log(employee.#baseSalary); // If you use "#" before the property key. Then you can't change it later, the outside of class. It a private modifier of the class you can't change it outside of the class. But remember this it's a javascript method, not a trypeScript method. typeScript method is different.
// =========================================
// // Access Modifier
// // ? public // Means you can access from anywhere almost. It's working with visibility. Means you can't see them.
// // ? private // Means Airtight you can't access from anywhere. It's working with visibility. Means you can't see them.
// // ? protected // it was totally missing from javascript. But you can use it in typescript. It's not accessible by outside of the class. But it can access by other class somehow. It's working with visibility. Means you can't see them.
// // ? readonly // you can see but you can't change them. example: public readonly name: string;
// class Employee {
//   public name: string; // typeScript make it by default "public". You select or not, but It will always be a "public".
//   private baseSalary: number; // typeScript make it by default "public". You select or not, but It will always be a "public".
//   constructor(name: string, baseSalary: number) {
//     this.name = name;
//     this.baseSalary = baseSalary;
//   }
// }
// const employee = new Employee('mir', 22000);
// const employee2 = new Employee('mizan', 24000);
// console.log(employee);
// console.log(employee2);
// console.log(employee instanceof Employee);
// console.log(employee2 instanceof Employee);
// employee.baseSalary = -500; // You can't read or write them if you use private.
// console.log(employee.baseSalary); // You can't read or write them if you use private.
// =========================================
// // it's the typescript shorthand way. And the previous was traditional way.
// class Employee {
//   // // tradition way.
//   // constructor(
//   //   public name: string,
//   //   private _baseSalary: number,
//   // ) {
//   //   this._baseSalary = _baseSalary
//   //   this.name = name
//   // }
//   constructor(
//     // in the shorthand you don't need to use 'this' key word. Small code but effective.
//     public name: string,
//     private _baseSalary: number,
//   ) {}
//   // use private then use get or set is depending on design and project, how you actually want to handle.
//   // If you want to show the "private" Access modifier value later, Then use it.
//   // this method is use for get.
//   get baseSalary(): number {
//     return this._baseSalary;
//   }
//   get salaryWithBonus(): number {
//     return this._baseSalary + 5000;
//   }
//   // it was traditional method. not good for modern method.
//   getSalaryWithBonus(): number {
//     return this._baseSalary + 5000;
//   }
//   // this method is use for set.
//   set baseSalary(newSalary: number) {
//     if (newSalary < 0) {
//       throw new Error('Salary can not be negative value.');
//     }
//     this._baseSalary = newSalary;
//   }
//   // it was traditional method. not good for modern method.
//   setBaseSalary(newSalary: number) {
//     if (newSalary < 0) {
//       throw new Error('Salary can not be negative value.');
//     }
//     this._baseSalary = newSalary;
//   }
// }
// const employee = new Employee('mir', 22000);
// const employee2 = new Employee('mizan', 24000);
// // console.log(employee);
// // console.log(employee2);
// // console.log(employee instanceof Employee);
// // console.log(employee2 instanceof Employee);
// // employee.baseSalary = 3000; // you can't assign private keys. If you don't use set method.
// // employee.baseSalary = -3000; // you can't use negative value if you add set condition.
// console.log(employee.baseSalary); // you can't view private keys. If you don't use get method.
// console.log(employee.salaryWithBonus);
// console.log(employee.getSalaryWithBonus()); //  if you use tradition method. You need to call it later like this. Which is not good for modern method.
// // console.log(employee.setBaseSalary(-500)); //  if you use tradition method. You need to call it later like this. Which is not good for modern method.
