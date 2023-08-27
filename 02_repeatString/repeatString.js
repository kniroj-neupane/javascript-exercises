const repeatString = function(string,n) {
    let string2="";
    if(n<0){
        string2="ERROR"
    }
    for(let i=0;i<n;i++){
        string2=string2+string;
    }
    return string2;
};

// Do not edit below this line
module.exports = repeatString;
