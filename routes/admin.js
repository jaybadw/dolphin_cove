const express= require("express")

const router = express.Router()
const conn = require('../lib/database')

router.get('/', (req,res)=> 
{
    conn.query(`SELECT * FROM bookings;`, (err,bRows)=>{
    if (err) throw (err)
    conn.query(`SELECT * FROM dolphincove.programs;`, (err,pRows)=>{
        if (err) throw (err)
    conn.query(`SELECT COUNT (guest_name) as count FROM dolphincove.bookings;`, (err,gRows)=>{
            if (err) throw (err)    
    conn.query(`SELECT SUM(cost) as price FROM dolphincove.programs;`,(err,cRows)=>{
             if (err) throw (err)   
        if(!err){
            let proNum = pRows.length
            let amount = bRows.length;
            let guestsnum = gRows[0].count;
            let revenue = cRows[0].price;
            res.render('admin',{bookings:bRows, programs: pRows,guests:gRows, amount ,guestsnum,proNum, revenue})
        }
    })
    })
})
}

)
})



module.exports=router;