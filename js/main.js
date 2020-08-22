
//var fruits = ['banans','orange','apple','annanas'];

var fruits = new Array();

fruits.push('banans');
fruits.push('anannas');
fruits.push('apples');
fruits.push('apples');
fruits.push('apples');
fruits.push('apples');
fruits.push('apples');
fruits.push('apples');
fruits.push('apples');
fruits.push('apples');


var fruitsDocument = document.getElementById("fruits");


fruits.map((fruit)=>{
    fruitsDocument.innerHTML=fruitsDocument.innerHTML+ "<li>"+fruit+"</li>";
})


function rmStart(){
    fruits.shift();
    fruitsDocument.innerHTML="";
    fruits.map((fruit)=>{
        fruitsDocument.innerHTML=fruitsDocument.innerHTML+ "<li>"+fruit+"</li>";
    })
}

function rmEnd(){
    fruits.pop();
    fruitsDocument.innerHTML="";
    fruits.map((fruit)=>{
        fruitsDocument.innerHTML=fruitsDocument.innerHTML+ "<li>"+fruit+"</li>";
    })
    
}



/****************************************** */


var user = {
    firstName:"Chourabi",
    lastname:"taher",
    email:"tchourabi@gmail.com",
    phone: 93863732,
    avatar: "https:/*//jshsshsik"
};

var users = [
    user,
    user,
    user,
    user,
    user,
    user,
    user,
    user,
    
]

console.log(users[2].firstName);

console.log(user.firstName);


/*********************************** */

var date = new Date();

document.getElementById("timer").innerText=date;

console.log(date);

var dateToShow= date.getDate()+ " / "+ (Number.parseInt(date.getMonth()) +1)+" / "+date.getFullYear() ;

console.log(dateToShow);


var myInterval = setInterval(()=>{
    var date = new Date();

    document.getElementById("timer").innerText=date;
    

},1000);


setTimeout(()=>{
    
    clearInterval(myInterval);
},5000);