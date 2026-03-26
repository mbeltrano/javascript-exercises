const palindromes = function (stringa) {
    const str = stringa
                    .replace(/[^\w\s\']|_/g, "")
                    .replace(/\s+/g, "")
                    .toUpperCase();
    console.log(str);
    const reverse = str
                      .split("")
                      .reverse()
                      .join("");
    console.log(reverse);
    console.log(str === reverse);
    return str === reverse;

};

// Do not edit below this line
module.exports = palindromes;
