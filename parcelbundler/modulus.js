export function modulus(n1,n2)
    {            
        const mod=n1%n2;
        document.getElementById("ans").innerHTML= `The modulus of ${n1} and ${n2} is ${mod}`;
        console.log(n1%n2);
    }