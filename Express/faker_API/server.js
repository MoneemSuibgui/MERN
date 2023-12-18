const express=require("express");
const app=express();
const port=8000;



// we can create a function to return a random / fake "User"
const { faker } = require('@faker-js/faker');
const createUser = () => {
    const newFakeUser = {
        _id:faker.string.uuid(),
        firstname: faker.person.firstName(),
        lastname:faker.person.lastName(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        password:faker.internet.password(),
    };
    return newFakeUser;
};
const newFakeUser = createUser();
// console.log(newFakeUser);

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.string.uuid(),
        name:faker.company.name(),
        adress:
            {
                street:faker.location.street(),
                city:faker.location.city(),
                state:faker.location.state(),
                zipCode:faker.location.zipCode(),
                country:faker.location.country()
            }
    };
    return newFakeCompany;
};
    
const newFakeCompany = createCompany();
// console.log(newFakeCompany);




// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new",(req,resp)=>{
    // console.log(newFakeUser())
    const fakerUser=createUser();
    resp.json(fakerUser)
})

//Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new",(req,resp)=>{
    // console.log(createCompany());
    const fakerCompany=createCompany();
    resp.json(fakerCompany);
})

//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company",(req,resp)=>{
    const userObj= createUser()
    const companyObj= createCompany();
    // we will combine the two objects
    const userCompany={fakerCompany:companyObj,fakerUser:userObj}
    console.log(userCompany)
    resp.json(userCompany )
})





app.listen(port,()=>console.log(`Listening on port:${port}`))