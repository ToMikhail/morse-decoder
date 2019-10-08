const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = '';
    let charBinary = '';

    for (let n = 0; n < expr.length - 1; n = n + 10) {
        if (!isNaN(expr[n])) {

            charBinary = expr.substr(n, 10);

            let charMorse = "";
            let ch = "";

            for (let i = 0; i < 10; i = i + 2) {
                charMorse = charBinary.substr(i, 2);
                if (charMorse === "10") {
                    ch = ch + '.';
                } else if (charMorse === "11") {
                    ch = ch + '-';
                }
                else {
                    continue
                }
            }

            str = str + MORSE_TABLE[ch]
        } else {
            str = str + ' ';
        }
    }
    return str;
}

module.exports = {
    decode
}