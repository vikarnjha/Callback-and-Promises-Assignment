function manipulateString(string, callback){
    const manipulatedString = string.toUpperCase();
    callback(manipulatedString);
}
function logString(manipulatedString){
    console.log(`The manipulated string is:- ${manipulatedString}`);
}
manipulateString("Hello! vikarn jha", logString);
// Output:- The manipulated string is:- HELLO! VIKARN JHA