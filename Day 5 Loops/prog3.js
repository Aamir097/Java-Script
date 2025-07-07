//Sum of Odd nos from 1 to 20 (while loop)

sum=0;
i=1;
while(i<=20)
{
    if(i%2==1)
    {
        console.log(i);
        sum=i+sum;
    }
    i++;
}

console.log('Sum of odd no is : ')
console.log(sum);