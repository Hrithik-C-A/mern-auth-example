const express= require('express')
const app = express()

const dbconnect = require('./db/dbConnect')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const User = require('./models/User')
const auth = require('./auth')
dbconnect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/free-endpoint",(req, res) => {
    res.json({ message: "You are free to access me anytime" });
  });

app.get("/auth-endpoint",auth, (req, res) => {
    res.json({ message: "You are authorized to access me" });
  });

app.post('/login',(req,res)=>{
    User.findOne({email: req.body.email})
    .then((user)=>{
        bcrypt.compare(req.body.password,user.password)
        .then((passwordCheck)=>{

            if(!passwordCheck) {
                return response.status(400).send({
                  message: "Passwords does not match",
                  error,
                })
            }

            const token = jwt.sign({
                userId: user._id,
                userEmail: user.email
            },'RANDOM-TOKEN',{expiresIn:'24h'})

            res.status(200).send({
                message: "Login Successful",
                email: user.email,
                token
            })
        })
        .catch((e)=>{
            res.status(400).send({
                message: "Passwords does not match",
                e
            })
        })
    })
    .catch((e)=>{
        res.status(404).send({
            message: "Email not found",
            e,
          })
    })
})

app.post('/register',(req,res)=>{
     bcrypt.hash(req.body.password,10)

    .then((hashedPassword)=>{

        const user = new User({
            email: req.body.email,
            password: hashedPassword
        })

       user.save().then((result)=>{
        res.status(201).send({
            message: "User created Succesfully",
            result
        })
       }).catch((error)=>{
           res.status(500).send({
            message: "User not created",
            error
           })
       }) 
    })
    .catch((e)=>{
        res.status(500).send({
            message: 'Password was not hashed successfully',e
        })
    })
})

app.listen(3000,()=>{
    console.log('App is running on port 3k')
})

