
 const numbers=[];
 for(let i=0;i<=100;i++)
   {
     numbers.push(i);
   }

 function logArray()
   {
     console.log(numbers);    
   }

 function contentOfArray()
  {
    for(num of numbers)
      {
        console.log(num);
      }        
  }

 function checkArray ()
    {
        for(num of numbers)
        {
          if (fizzBuzz(num))
          {
            console.log("FizzBuzz");
          }
          else if(fizz(num))
          {
            console.log("Fizz");
          }
          else if(buzz(num))
          {
            console.log("Buzz");
          }
          else
          {
            console.log(num);
          }
        }
    }

 function fizzBuzz(num)
    {      
        if (num%3===0&&num%5===0)
            {
            return true;
            }
        else
            {
                return false;
            }    
    }        
    
 function fizz(num)
    {
        if (num%3===0)
            {
            return true;
            }
        else
            {
                return false;
            }
    }
    
 function buzz(num)
    {
        if (num%5===0)
            {
            return true;
            }
        else
            {
                return false;
            }
    }

    
    
        
    const dualDivisibleNumbers=[];       
    
        for (num of numbers)
        {
          if (fizzBuzz(num))
          {
            dualDivisibleNumbers.push(num);
          }
        
        }
        console.log(dualDivisibleNumbers);
    
    
        
    

   


