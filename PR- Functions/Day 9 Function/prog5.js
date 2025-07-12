// Palindrome

let str = 'racecar';

const Palindrome=(str)=>{
    let revrsed= '';
    for(let i=str.length-1; i>=0; i--)
    {
        revrsed += str[i];
    }

    if(str===revrsed){
        console.log("Palindrome");
    }else{
        console.log("Not Palindrome");
    }
}

Palindrome(str);