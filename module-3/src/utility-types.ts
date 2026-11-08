// Utility types
// =================================================================
// Partial type

// Whatever you give: optional "?:" or required. Partial will make it optional.
interface User {
  id: string;
  name: string;
  email: string;
}

// interface OptionalUser {
//   id?: string;
//   name?: string;
//   email?: string;
// }

// type PartialUser = Partial<User>;

// const updateProfile = (id: string, data: User) => {
//   // some backend logic
// };

// const updateProfile = (id: string, data: OptionalUser) => {
//   // some backend logic
// };

// const updateProfile = (id: string, data: Partial<User>) => {
//   // some backend logic
// };

type PartialUser = Partial<User>;

const updateProfile = (id: string, data: PartialUser) => {
  // some backend logic
};

updateProfile('sdfsdsf', { name: 'Mizan' });

// =================================================================
// Required
// Whatever you give: optional "?:" or required. Required will make it require.
interface Config {
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {
  // some logic
};

initialize({ apiKey: 'sdfsdfs', timeout: 30000 });

// =================================================================
// Pick
// Pick will choose some specific value to keep from the object.
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, 'name' | 'description'>;

// const preview: Product = {
//   name: 'ABC',
//   description: 'EFG',
// };

const preview: ProductPreview = {
  name: 'ABC',
  description: 'EFG',
};

// =================================================================
// Omit
// Omit will choose some specific value to remove from the object.
interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

// const directoryEntry: Employee = {
//   id: 42,
//   name: 'Bob',
//   salary: 20000,
//   nid: '1235343',
// };

type PublicEmployee = Omit<Employee, 'salary' | 'nid'>;

const directoryEntry: PublicEmployee = {
  id: 42,
  name: 'Bob',
};

// =================================================================
// Record
// Record is mostly use in the project. It takes 2 generic parameter. One is for object property key and other one is for type indication.
type Environment = 'development' | 'staging' | 'production';

// ======
// interface IEnvironment {
//   development: string;
//   staging: string;
//   production: string;
// }

// const apiUrls: IEnvironment = {
//   development: 'http://localhost:3000',
//   staging: 'https://staging.api.com',
//   production: 'https://api.com',
// };

// ======
// const apiUrls: Record<string, string> = {
//   development: 'http://localhost:3000',
//   staging: 'https://staging.api.com',
//   production: 'https://api.com',
//   testing: 'testing',
// };

// ======
// const apiUrls: Record<Environment, string> = {
//   development: 'http://localhost:3000',
//   staging: 'https://staging.api.com',
//   production: 'https://api.com',
// };

// ======
const apiUrls: Record<Environment, number> = {
  development: 122432,
  staging: 2344534,
  production: 578435789,
};
