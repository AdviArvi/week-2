import {add} from './add.js';
import {substract} from './substract.js';
import {divide} from './divide.js';
import {multiply} from './multiply.js';
import {modulus} from './modulus.js';

const butts=document.querySelector(".button");    

export function calculate() 
{
  let n1 = parseInt(document.getElementById("num1").value);
  console.log(n1);
  let n2 = parseInt(document.getElementById("num2").value);
  console.log(n2);
  let oper = document.getElementById("operator").value;
    
     if(isNaN(n1)||isNaN(n2))
        {
          console.warn("Enter valid number");
        }

     else if (oper === "+") 
        {
          add(n1,n2);
        } 
     else if (oper === "-") 
        {
          substract(n1,n2);
        } 
     else if (oper === "/") 
        {
          if(n2=='0'&& n1=='0'||n2=='0')
            {
              console.error("Unable to divide");
            }
          else
            {
              divide(n1,n2);
            }
        } 
    
     else if (oper === "*") 
        {
          multiply (n1,n2);
        }
        
     else if(oper==='%')
        {
          modulus(n1,n2);
        }
}
      
butts.addEventListener('click',calculate);

    
