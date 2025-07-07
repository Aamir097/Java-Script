//Sum of multiples of 5 from 1 to 50 (for loop)

sum=0;
for(let i=1; i<=50; i++)
{
    if(i%5==0)
    {
        console.log(i);
        sum=i+sum;
    }
}

console.log('Sum of multiples of 5 from 1 to 50 is :')
console.log(sum);