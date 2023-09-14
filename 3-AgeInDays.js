const person = {
    firstName: "Vikarn",
    lastName: "Jha",
    age: 20,
};

function ageInDays(person, callback){
    const fullName = `${person.firstName} ${person.lastName}`
    const ageInDays = person.age*365;
    callback(fullName, ageInDays);
}

function logResult(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}
ageInDays(person, logResult);

// Output:- The person's full name is Vikarn Jha and their age in days is 7300