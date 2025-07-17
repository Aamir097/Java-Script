// Employee datas

let emp=[
    {
        id: 2131,
        name: "Shivam",
        email: "shivam2002@gmail.com",
        post: "Manager",
    },
    {
        id: 3100,
        name: "Jarir",
        email: "jarir910@gmail.com",
        post:  "Frontend Developer",
    },
    {
        id: 3129,
        name:"Pratham",
        email: "pratham320@gmail.con",
        post: "Backend Developer",
    },
    {
        id: 3603,
        name: "Aamir",
        email: "aamir729039@gmail.com",
        post: "Fullstack Developer",
    },
];

let filteruser= emp.filter((emp) =>{
    return emp.name === "Aamir";
});


console.log(emp);

console.log("Employee Data found");
console.log(filteruser);



