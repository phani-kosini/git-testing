 //MTAH objects//
 
 //max :
 
const maxValue = Math.max(20,69,59,7,88,99,15,36.,75.69,98.99,78)
console.log(maxValue);

//min

const minValue = Math.min(20,69,59,7,88,99,15,36.,75.69,98.99,78)
console.log(minValue);

const round = Math.round(17.4);
console.log(round);

const ceil = Math.ceil(17.1);
console.log(ceil);

const floor = Math.floor(17.4);
console.log(floor);

const pow =  Math.pow(2,5)
console.log(pow)

const sqrt =  Math.sqrt(100)
console.log(sqrt)

const random = Math.random();
console.log(random);


const btn = document.querySelector('.btn')
const input =document.querySelector("input")
btn.addEventListener("click", function(){
    const randomNumber = Math.random() * 1000000;
    console.log(Math.round(randomNumber));
    input.value = Math.round(randomNumber);
})


setTimeout(function(){
    alert("pop up")
},5000)