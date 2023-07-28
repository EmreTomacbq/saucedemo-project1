import { faker } from '@faker-js/faker';

class Generator {
    generateNumberBetween(min: number, max: number): number {
    const number = faker.number.int({ min: min, max: max });
    return number;
  }
}

export default new Generator();
