
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
 const dualDivisibleNumbers=[];
 function checkArray ()
    {
        for(num of numbers)
        {
          if (fizzbuzz(num))
          {
            console.log("Fizz Buzz");            
            dualDivisibleNumbers.push(num);
            console.log(dualDivisibleNumbers);
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
    

 function fizzbuzz(num)
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
       
    
    
    
        
    

   


