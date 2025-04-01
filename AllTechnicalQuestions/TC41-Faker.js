//  npm install @faker-js/faker
import { faker } from '@faker-js/faker';

const randomEmail = faker.internet.email();
const randomName = faker.person.fullName();

console.log(randomEmail)
console.log(randomName)