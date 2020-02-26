let button=document.querySelector('.button');

let fname;
let lname;
let bdate;
let users=[];

//function for creating an object and add into an array
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