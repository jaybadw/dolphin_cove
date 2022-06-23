const express= require("express")

const router = express.Router()
const conn=require('../lib/database')


router.get('/',(req,res)=>{
    var sql=`SELECT *from dolphincove.bookings;`
    conn.query (sql,(err,rows)=>{
        if(err) throw (err)
        if(!err){
            res.render('add-bookings',{bookings:rows})
        }
        
    
    })
})
router.post('/gate',(req,res)=>{
    console.log(req.body) 
    let today= new Date();
    
    const data={
       
        booked_date:req.body.bookdate,
        hour:req.body.hour,
        guest_name:req.body.fullName,
        phone:req.body.phone,
        people: req.body.people,
        program_name: req.body.activities,
        location_id: req.body.locay,
        dateOB: today
    }
    conn.query(`INSERT INTO bookings  SET  ? ;`,data,(err,rows)=>{
            if(err) throw (err)
             if(!err) {
                 res.render('add-bookings')
             }
            
    })                                                                              
})



module.exports=router;