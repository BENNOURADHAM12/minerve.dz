const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
app.use(cors());
const bcrypt = require("bcryptjs")
const jwt= require("jsonwebtoken")
const JWT_SECRET = "soaphdadonbxpa8898419519()§§§§§*88a8a8a455";

app.use(express.json());

const mongoURL = "mongodb+srv://crud:crud@cluster0.j7b7bsd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser:true
}).then(() => {console.log("connected to database")})
.catch(e=>console.log(e))

app.listen(5000, ()=> {
    console.log("Server started")
})

/* app.post("/post", async(req, res )=> {
    console.log(req.body.name)
    const {data} = req.body;

    try {
        if(req.body.name == "adham"){
            res.send({status :"ok"})
        }else{
            res.send({status :"none"})
        }
    } catch (error) {
        res.send({status : "error"}) 
    }
}) */

require('./userSchema');

const User = mongoose.model('userInfo')

app.post("/register", async(req, res) =>{
    const {Firstname, Lastname, Email, Password} = req.body;
    const encryptedPassword = await bcrypt.hash(Password, 10); 
    try {
        /* const oldUser = await User.findOne({Email});
        if(oldUser){
            res.send({error: "User exists"})
        } */
        await User.create({
            Firstname,
            Lastname,
            Email,
            Password:encryptedPassword
        })
         res.send({status : "Ok"})
    } catch (error) {
        res.send({status : "error"})
    }
})

app.post("/login", async(req, res) => {
    const {Email, Password} = req.body;
    const oldUser = await User.findOne({Email});
    if(!oldUser){
        return res.send({error: "User not found"});
    } 
    if(await bcrypt.compare(Password, oldUser.Password)){
        const token = jwt.sign({Email: oldUser.Email}, JWT_SECRET)
        if(res.status(201)){
            return res.json({status:"ok", data: token})
        }else{
            return res.json({status:"error"})
        }
    }
    res.send({status:"error", error:"password invalid"})
})

app.post("/userData", async(req, res) => {
    const {token} = req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        console.log(user)
        const userEmail = user.Email;
        User.findOne({Email : userEmail}).then((data) => {
            res.send({status: "ok", data : data})
        }).catch((error) => {
            res.send({status: "error", data : error})
        })
    } catch (error) {
        
    }
})

