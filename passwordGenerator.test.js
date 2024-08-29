// passwordGenerator.test.js
const generatePassword = require('./passwordGenerator'); // Adjust the path if needed
describe('generatePassword', () => {
    test('should throw an error for length less than 1', () => {
        
        expect(() => generatePassword(0, 'low')).toThrow("Password length must be at least 1");
    });

    test('should throw an error for invalid strength', () => {
        expect(() => generatePassword(10, 'invalid')).toThrow("Strength must be 'low', 'medium', or 'high'");
    });

    test('should generate a low strength password', () => {
        const password = generatePassword(8, 'low');
        expect(password).toHaveLength(8);
        expect(password).toMatch(/[a-z]/); // Contains lowercase
        expect(password).not.toMatch(/[A-Z]/); // No uppercase
        expect(password).not.toMatch(/[0-9]/); // No numbers
        expect(password).not.toMatch(/[^a-z]/); // No special characters
    });

    test('should generate a medium strength password', () => {
        const password = generatePassword(10, 'medium');
        expect(password).toHaveLength(10);
        expect(password).toMatch(/[a-z]/); // Contains lowercase
        expect(password).toMatch(/[A-Z]/); // Contains uppercase
        expect(password).toMatch(/[0-9]/); // Contains numbers
        expect(password).not.toMatch(/[^a-zA-Z0-9]/); // No special characters
    });

    test('should generate a high strength password', () => {
        const password = generatePassword(12, 'high');
        expect(password).toHaveLength(12);
        expect(password).toMatch(/[a-z]/); // Contains lowercase
        expect(password).toMatch(/[A-Z]/); // Contains uppercase
        expect(password).toMatch(/[0-9]/); // Contains numbers
        expect(password).toMatch(/[^a-zA-Z0-9]/); // Contains special characters
    });
});