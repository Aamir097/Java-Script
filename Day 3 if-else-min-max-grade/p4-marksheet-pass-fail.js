//Marksheet  Pass or Fail

let name="Aamir";
let rollno=21;
let sub1=72, sub2=55, sub3=67;

console.log(`Studemt Name is : ${name}`);
console.log(`Roll No is : ${rollno}`);
console.log(`English : ${sub1}`);
console.log(`Maths : ${sub2}`);
console.log(`Gujarati : ${sub3}`);


if(sub1>=35 && sub2>=35 && sub3>=35){
    console.log("Student Pass");
}else{
    console.log("Studetn Fail");
}