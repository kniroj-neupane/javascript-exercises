const reverseString = function(string) {
    let reverse=[];
    string = string.split("");
    reverse=string.reverse();
    let reverseString=reverse.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
