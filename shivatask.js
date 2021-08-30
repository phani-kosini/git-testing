for(i=0;i<=100;i++)
{
    console.log(i)
}

for(i=0;i<=100;i++)
{
    if(i%2==0)
    console.log(i)
}

for(i=0;i<=100;i++)
{
    if(i%2==1)
    console.log(i)
}

let total=0
for(i=0;i<=100;i++)
{ 
    total = total+i
}
   console.log(total)

   //temperature define//

// let temperature=50

// if( temperature<15){
//     console.log("very cold")
// }
// else if(temperature>=16 && temperature< 20){
//     console.log("cold")
// }
// else if (temperature>=21 && temperature< 35){
//     console.log("Moderate")
// }
// else if ( temperature>=36 && temperature< 42){
//     console.log("Hot")
// }
// else {
//     console.log("Extreme hot")
// }
// age define//
let age = 4
// debugger;
if( age<3){
    
    console.log("infant")
}
else if ( age>=4 && age <12){
    console.log("child")
}
else if( age>=13 && age <19){
    console.log("teanage")
}
else if ( age >= 20 && age <50){
    console.log("adult")
}
else{
    console.log("old age")
}


// (10>5)? console.log('10 greater than 5') : console.log('5 is greater than some value')

let arr1=['a','b','c','d']
let arr2=['e','f','g']
let arr3= arr1.concat(arr2)
// console.log('<<<>>>>>>')
console.log(arr3)

let arr=['bag','pen','charger']
console.log(arr.includes('mobile'))
console.log(arr.includes('pen'))
console.log(arr.includes(''))

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));

let arr5=['a','c','f','k','i']
console.log(arr5.indexOf('f'));

let arr6=['shiva','is','a','good','trainer']
console.log(arr6.join());
console.log(arr6.join(""));
console.log(arr6.join("@"));

let arr7=['shiva','chaithu','mastan','govind','shiva','karthik','shiva']
console.log(arr7.lastIndexOf('shiva'));

let vehicles=['car','bus','train'];
vehicles.push('byke');
vehicles.push('innova');
console.log(vehicles);

let arr8=['1','2','3','6','9']
console.log(arr8.pop());
console.log(arr8)

let arr9=['1','5','7','8','9'];
console.log(arr9.reverse());

let arr10=['1','2','3','4']
console.log(arr10.shift())
console.log(arr10)

let arr11=['1','2','3','4']
console.log(arr11.unshift('5'));
console.log(arr11)

let arr12=['cat','rat','mouse','elephant','donkey']
console.log(arr12.slice(0,2));

let months = ['March', 'Jan', 'feb', 'Dec','1',5,7];
console.log(months.sort())

//strings//

let sentence = ' The quick brown fox jumps over the lazy dog.';
 console.log(sentence.charAt(1))

 let sentence1 = ' The quick brown fox jumps over the lazy dog.';
 console.log(sentence.charCodeAt(1))

 let sentence2 = ' The quick brown fox jumps ';
 let sentence3 ='over the lazy dog.';
 let sentence4 ='xyz';
 console.log(sentence2.concat(sentence4))

 let sentence5= ' The quick brown fox jumps ';
 console.log(sentence5.endsWith('jumps '))

 let sentence6= ' The quick brown fox jumps ';
 console.log(sentence6.includes('to '))
 
 let sentence7= ' The quick brown fox jumps fox ';
 console.log(sentence7.lastIndexOf('fox'))

 let sentence8= 'phani.';
 console.log(sentence8.repeat('5'))

 let sentence9= 'i have dog and i have cat also';
 console.log(sentence9.replace('i','we'))

 let sentence10= 'i have dog and i have cat also';
 console.log(sentence10.replaceAll('i','we'))

 let sentence11= 'i have dog and i have cat also';
 console.log(sentence11.search('cat'))

 let sentence12= 'i have dog and i have cat also';
 console.log(sentence12.slice('2','7'))

 let sentence13= 'phani.png';
 console.log(sentence13.split('.'))

 let sentence14= ' phani.png';
 console.log(sentence14.substring('1','6'))

 let sentence15= new String('kp')
 console.log(sentence15.toString(''))
 console.log(sentence15)

 let sentence16= ' phani.png';
 console.log(sentence16.toUpperCase())

 let sentence17= ' Phani.png';
 console.log(sentence17.toLowerCase())

 let sentence18= '  Phaneendra  kosini   ';
 console.log(sentence18.length)
 console.log(sentence18)
 let aftertrim= (sentence18.trim())
 console.log(aftertrim.length)


 
 let sentence19= '  shiva  is a good boy  ';
 console.log(sentence19)
 console.log(sentence19.trimEnd())

  
 let sentence20= '  shiva  is a good trainer  ';
 console.log(sentence20)
 console.log(sentence20.trimStart())



 const sum = 0; 
 for  (const i = 0; i < 1000; i++) { if (i % 3 === 0 || i % 5 === 0) { sum += i; } } 
 console.log(sum);

 



