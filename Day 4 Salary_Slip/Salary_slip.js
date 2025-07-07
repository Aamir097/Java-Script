let e_name="Aamir";
let basic_salary=18000;
let HRA= basic_salary * 0.5;
let DA= basic_salary * 0.1;
let TA= basic_salary * 0.2;
let MA= basic_salary * 0.5;
let PF= basic_salary * 0.12;
let PT=200;
let bonus=0;
let exp=2;
let gross_salary = basic_salary + HRA + DA + TA + MA + bonus;
let net_salary=gross_salary - PF - PT;

if(exp>3 && basic_salary >= 18000)
{
    bonus= basic_salary * 0.15;
}

console.log(HRA);
console.log(bonus);
console.log(DA);
console.log(TA);
console.log(PT);
console.log(PF);
console.log(TA);
console.log(MA);
