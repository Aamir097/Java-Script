//Grade

let name="Aamir";
let rollno=21;
let sub1=72, sub2=55, sub3=67;
let total=sub1+sub2+sub3;
let percentage=(total/300) * 100;


console.log(`Studemt Name  : ${name}`);
console.log(`Roll No  : ${rollno}`);
console.log(`English : ${sub1}`);
console.log(`Maths : ${sub2}`);
console.log(`Gujarati : ${sub3}`);



if(sub1>=35 && sub2>=35 && sub3>=35){
    console.log("Student Pass");
}else{
    console.log("Studetn Fail");
}


if(percentage>=90){
    console.log(`A+ Grade ${percentage.toFixed(2)}%`);
}else if(percentage>=80){
    console.log(`A Grade ${percentage.toFixed(2)}%`);
}else if(percentage>=70){
    console.log(`B+ Grade ${percentage.toFixed(2)}%`);
}else if(percentage>=60){
    console.log(`B Grade ${percentage.toFixed(2)}%`);
}else if(percentage>=50){
    console.log(`C+ Grade ${percentage.toFixed(2)}%`);
}else{
    console.log(`D Grade ${percentage.toFixed(2)}%`);
}