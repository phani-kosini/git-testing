

 const dt=new Date();
 const todayDate=dt.getDate();
 const currentMonth = dt.getMonth() +1;
 const currentYear = dt.getFullYear();
 const curretDay = dt.getDay();

const completeDate = todayDate + '-' + currentMonth + '-' + currentYear;
console.log(completeDate);
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
// console.log(curretDay);
console.log(getTheCurrentDay(curretDay));

const customDate= document.getElementById("date");
customDate.innerText=completeDate;

// max,min,pow,sqrt,floor,ceil,round,random,//



