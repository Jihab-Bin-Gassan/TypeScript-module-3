// // inheritance: A manager is an employee with an additional responsibility.
// class Employee {
//   constructor(
//     public name: string,
//     private _baseSalary: number,
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
//   describe(): string {
//     return `${this.name} earns ${this.baseSalary}`; // you can use "_baseSalary" or "baseSalary" as your wish. because this action is under your Employee class. If you don't have the get method then you should must give the "_" before the baseSalary. Means you need to matching the key name first.
//   }
// }
// class Manager extends Employee {
//   // name: string;
//   // baseSalary: number;
//   teamMemberCount: number;
//   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
//     super(name, _baseSalary);
//     this.teamMemberCount = teamMemberCount;
//   }
// }
// const employee = new Employee('mir', 22000);
// console.log(employee.describe());
// const manager = new Manager('Mizan', 24000, 20); // need to call it as constructor parameter serial. otherwise you will get an error.
// console.log(manager.describe());
// ================================================================
class Employee {
    name;
    _baseSalary;
    constructor(name, 
    // private _baseSalary: number, // we can't access outside of this class or child.
    _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    // get baseSalary(): number {
    //   return this._baseSalary;
    // }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error('Salary can not be negative value.');
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`; // you can use "_baseSalary" or "baseSalary" as your wish. because this action is under your Employee class. If you don't have the get method then you should must give the "_" before the baseSalary. Means you need to matching the key name first.
    }
}
class Manager extends Employee {
    teamMemberCount;
    // write inheritance in short form
    constructor(
    // constructor will send this name and _baseSalary into the parent class.
    name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary); // super call will take the "type" from the parent and keep the type into constructor.
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const employee = new Employee('mir', 22000);
console.log(employee.describe());
const manager = new Manager('Mizan', 24000, 20); // need to call it as constructor parameter serial. otherwise you will get an error.
console.log(manager.describeWork());
// console.log(manager.describeManager());
console.log(manager.baseSalary);
export {};
