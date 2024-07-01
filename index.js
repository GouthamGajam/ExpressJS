const express = require("express");
const app = express();

const port = 5900;

app.get("/",(req,res)=>{
    res.json({"message":"Hello, This is Home page"});
});
app.get("/users",(req,res)=>{
    res.json({"message":"Get All the users"});
});
app.get("/users/:id",(req,res)=>{
    res.json({"message":`Get User with ID ${req.params.id}`});
});
app.post("/users/:id",(req,res)=>{
    res.json({"message":`Create new user`});
});
app.put("/users/:id",(req,res)=>{
    res.json({"message":`Update User with ID ${req.params.id}`});
});
app.delete("/users/:id",(req,res)=>{
    res.json({"message":`Delete User with ID ${req.params.id}`});
});


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})