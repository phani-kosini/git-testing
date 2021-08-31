

 
const getCompleteDate = ()=>{
    const dt=new Date();
 const todayDate=dt.getDate();
 const currentMonth = dt.getMonth() +1;
 const currentYear = dt.getFullYear();
 const curretDay = dt.getDay();
//  hours
// mins
// seconds

let hours = dt.getHours();
const mins = dt.getMinutes();
const seconds = dt.getSeconds();
const AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12 ;


const totalTime = hours + ' : ' + mins + ' : ' + seconds + ':' +AmOrPm;

const completeDate = todayDate + '-' + currentMonth + '-' + currentYear;
// console.log(completeDate);
// to get current day//

const getTheCurrentDay = function( day) {
    switch (day) {
        case 1:
        return  "Mon";
        case 2:
        return "Tue";
        case 3: 
        return  "Wed";
        case 4:
        return  "Thu";
        case 5:
        return  "Fri"; 
        case 6: 
        return  "Sat";
        case 7:
        return  "Sun";
    }
};

}
// console.log(curretDay);
// console.log(getTheCurrentDay(curretDay));
setInterval(function getMyDate(){
    // getCompleteDate();
    const dt=new Date();
    const todayDate=dt.getDate();
    const currentMonth = dt.getMonth() +1;
    const currentYear = dt.getFullYear();
    const curretDay = dt.getDay(); 
    let hours = dt.getHours();
    const mins = dt.getMinutes();
    const seconds = dt.getSeconds();
    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12 ;
   
   
   const totalTime = hours + ' : ' + mins + ' : ' + seconds + ':' +AmOrPm;
   const completeDate = todayDate + '-' + currentMonth + '-' + currentYear;
   
   
   const getTheCurrentDay = function( day) {
       switch (day) {
           case 1:
           return "Mon";
           case 2:
           return "Tue";
           case 3: 
           return  "Wed";
           case 4:
           return  "Thu";
           case 5:
           return  "Fri"; 
           case 6: 
           return  "Sat";
           case 7:
           return  "Sun";
       }
   };
    const customDate= document.getElementById("date");
    customDate.innerText=completeDate + ' ' + getTheCurrentDay(curretDay)  + ' ' + totalTime ;
},1000)






// max,min,pow,sqrt,floor,ceil,round,random,//



