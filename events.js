
function processTheInput(cb){
    const name = prompt('Enter your Name')
    console.log(name)
// console.log(cb)
cb(name)
}
function greetTheUser(name){
    alert(name)
}
// greetTheUser();
processTheInput(greetTheUser);