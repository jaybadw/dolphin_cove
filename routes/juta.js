const express= require("express")

const router = express.Router()
const conn=require('../lib/database')

router.get('/', (req,res)=> 
{
    conn.query(`SELECT * FROM bookings;`, (err,bRows)=>{
    if (err) throw (err)
    conn.query(`SELECT * FROM dolphincove.programs;`, (err,pRows)=>{
        if (err) throw (err)
        if(!err){
            res.render('juta',{bookings:bRows, programs: pRows})
        }
    })
})

}
)
// router.post('/bad',(req,res)=>{
//     console.log(req.body) 
//     let today= new Date();
//     const data={
       
//         booked_date:req.body.bookdate,
//         hour:req.body.hour,
//         guest_name:req.body.fullName,
//         phone:req.body.phone,
//         people: req.body.people,
//         program_name: req.body.activities,
//         location_id: req.body.locay,
//         dateOB: today
//     }
//     conn.query(`INSERT INTO bookings  SET  ? ;`,data,(err,rows)=>{
//             if(err) throw (err)
//              if(!err) {
//                  res.render('juta')
//              }
            
//     })                                                                              
// })



module.exports=router