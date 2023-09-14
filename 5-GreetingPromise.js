function greet(name){
    return new Promise((resolve) => {
        const greeting = `Hello ${name}!`;
        resolve(greeting);
    });
}
let names = "Vikarn Jha";
greet(names).then((message) => console.log(message));
// Output:- Hello Vikarn Jha!