import { v4 as uuidv4 } from 'uuid';

const firstNames = ['Alex', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'];

function generateName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

function generateEmail(name) {
    const cleanName = name.toLowerCase().replace(' ', '.');
    return `${cleanName}.${Math.floor(Math.random() * 1000)}@potatostan.gov`;
}

export function generatePeople(count, maxPotatoes = 1000) {
    const usedPotatoes = new Set();
    const people = [];

    for (let i = 0; i < count; i++) {
        const name = generateName();
        let potatoCount;

        do {
            potatoCount = Math.floor(Math.random() * maxPotatoes) + 1;
        } while (usedPotatoes.has(potatoCount));

        usedPotatoes.add(potatoCount);

        people.push({
            id: uuidv4(),
            name,
            email: generateEmail(name),
            potatoes: potatoCount
        });
    }

    return people;

    // Sort by Potatoes (Descending Order)
    // return people.sort((a, b) => b.potatoes - a.potatoes);
}
