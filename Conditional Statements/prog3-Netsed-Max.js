// Nested-Max

let a=100, b=55, c=720, d=111, e=202;

if(a>=b && a>=c && a>=d && a>=e){
    console.log("A is Max");
}else if(b>=a && b>=c && b>=d && b>=e){
    console.log("B is Max");
}else if(c>=a && c>=b && c>=d && c>=e){
    console.log("C is Max");
}else if(d>=a && d>=b && d>=c && d>=e){
    console.log("D is Max");
}else{
    console.log("E is Max");
}