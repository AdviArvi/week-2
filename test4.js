let button=document.getElementById('submit');

let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let bdate=document.getElementById("bdate").value;
let users=[];

//function for creating an object and insert into an array
let addUser=()=>
{      
    
    const person={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        bdate:document.getElementById("bdate").value,
    };
    users.push(person);
    console.log(users);

}


button.addEventListener("click",addUser);