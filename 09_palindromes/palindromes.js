const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse=processedString.split("").reverse().join("");
    if(processedString==reverse) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
