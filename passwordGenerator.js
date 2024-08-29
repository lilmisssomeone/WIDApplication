function generatePassword(length, strength) {
    if (length < 1) throw new Error("Password length must be at least 1");

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characterSet = lowerCase; // Default to low strength

    if (strength === 'medium') {
        characterSet += upperCase + numbers;
    } else if (strength === 'high') {
        characterSet += upperCase + numbers + specialChars;
    } else if (strength !== 'low') {
        throw new Error("Strength must be 'low', 'medium', or 'high'");
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

module.exports = generatePassword; // Ensure this line is present