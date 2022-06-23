
const express= require("express")
const cookieParser = require('cookie-parser')
const router = express.Router()
const conn=require('../lib/database')
const session = require('express-session')
var bodyParser = require('body-parser')

router.get('/',(req,res,)=>{ 
    conn.query(`SELECT * FROM dolphincove.bookings;`, (err,rows)=>{
        if (err) throw (err)
          conn.query(`SELECT * FROM dolphincove.programs;`, (err,pRows)=>{
              if (err) throw (err)
              if(!err){
                  res.render('homepage',{products:rows, programs:pRows})
              }
          })
      })
})

router.get('/', (req, res)=>{
    // res.redirect('/orders')
    // res.render('orders')
    conn.query(`SELECT * FROM dolphincove.booking;`, (err,rows)=>{
      if (err) throw (err)
        conn.query(`SELECT * FROM dolphincove.programs;`, (err,pRows)=>{
            if (err) throw (err)
            if(!err){
                res.render('ochorios',{products:rows, programs:pRows})
            }
        })
    })
})

module.exports = router;