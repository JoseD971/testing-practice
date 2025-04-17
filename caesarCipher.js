function shiftChar(char, shift) {
    const ascciCode = char.charCodeAt(0);
    if(ascciCode >= 97 && ascciCode <= 122) {
        return String.fromCharCode(((ascciCode - 97 + shift) % 26 + 26) % 26 + 97);
    } 

    if(ascciCode >= 65 && ascciCode <= 90) {
        return String.fromCharCode(((ascciCode - 65 + shift) % 26 + 26) % 26 + 65);
    }

    return char;
}

function caesarCipher(str, shift) {
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

module.exports = { caesarCipher }