// Utility types
// =================================================================
// Partial type
const updateProfile = (id, data) => {
    // some backend logic
};
updateProfile('sdfsdsf', { name: 'Mizan' });
const initialize = (config) => {
    // some logic
};
initialize({ apiKey: 'sdfsdfs', timeout: 30000 });
// const preview: Product = {
//   name: 'ABC',
//   description: 'EFG',
// };
const preview = {
    name: 'ABC',
    description: 'EFG',
};
const directoryEntry = {
    id: 42,
    name: 'Bob',
};
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
const apiUrls = {
    development: 122432,
    staging: 2344534,
    production: 578435789,
};
export {};
