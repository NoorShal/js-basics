
const printName = (name) => {
    console.log(name)
}
const sayHelloName = (callback) => {
    console.log('hello ');
    callback('noor');
}

sayHelloName(printName)