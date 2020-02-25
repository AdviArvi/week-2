
const numbers=[];
for(let i=0;i<=100;i++)
   {
     numbers.push(i);
   }

function insertNumbersInArray()
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

  function checkArray (numbers)
    {
        for (let num=0;num<=100;num++)
        {
          if (num%15===0)
            {
            console.log("FizzBuzz");
            }
          else if(num%3===0)
            {
            console.log("Fizz");
            }
          else if(num%5===0)
            {
            console.log("Buzz");
            }
            else
            {
                console.log(num);
            }
        }
    }

// function checkArray()
// {
//     const result=numbers.map(num=>{
//         if (num%15===0)
//         {
//             console.log("BuzzFizz");
//         }
//         else if(num%5===0)
//         {
//             console.log("Buzz");
//         }
//         else if(num%3===0)
//         {
//             console.log("Fizz");
//         }
//         else 
//         {
//             console.log(num);
//         }
//     });
    
// }


