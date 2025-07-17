// Map function to replace

let users=["Jarir","Aamir","Shivam","Nurul","Pratham"];

let newdata= users.map((user)=>{
    return user== "Aamir" ? "Ahad" : user;   
})

console.log(users);
console.log(newdata);