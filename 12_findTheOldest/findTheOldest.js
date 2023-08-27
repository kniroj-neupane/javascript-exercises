const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0,age;
    for(let person of people){
        if(!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }
        age= person.yearOfDeath - person.yearOfBirth;
        if(age>oldestAge){
            oldestPerson = person;
            oldestAge = age;
        }
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
