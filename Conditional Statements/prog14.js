// Check leap year

let year= 2024;
if(year % 400== 0){
    console.log("Leap Year");
}else if(year % 1== 0){
    console.log("Not a Leap Year");
}else if(year % 4== 0){
    console.log("Leap Year");
}else{
    console.log("Not a Leap Year");
}