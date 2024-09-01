const palindromes = function (word) {
    let reversed = "";
    let wordCleaned = word.replace(/[^a-zA-Z0-9]/g, '');
    

    for(let i = (wordCleaned.length -1); i >=0; i--){
        reversed += wordCleaned[i];
    }
    return (wordCleaned.toLowerCase()) === (reversed.toLowerCase());

};
// Do not edit below this line
module.exports = palindromes;
