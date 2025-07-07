//Sum of even nos from 1 to 20 (for loop)

sum=0;
for(let i=1; i<=20; i++)
{
    if(i%2==0)
    {
        console.log(i);
         sum=i+sum;
    }
   
}

console.log('Sum of even nos is: ')
console.log(sum);