const express= require("express");
// const { route } = require("./routes/home");
const app = express()
const path= require('path')
const bodyParser = require('body-parser')

const conn =require('./lib/database')

const router = express.Router()


app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))

app.listen(8080,()=>{console.log("server started")})


// import Routes
const login = require("./routes/login")
const home = require("./routes/home");
 const ochi = require("./routes/ochorios")
 const admin = require("./routes/admin")
 const bookins = require("./routes/bookings")
 const juta = require("./routes/juta")

//  app.use('/login',login)
app.use('/', home)
app.use('/ochorios', ochi)
app.use('/admin',admin)
app.use('/add-bookings',bookins)
app.use('/juta',juta)

module.exports = app