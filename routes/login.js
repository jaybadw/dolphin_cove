var express = require('express');
var conn  = require('../lib/database');
const app = express()
var router = express.Router();
var session = require('express-session');

// app.use(session({
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     secret: 'shhhh, very secret'
//   }));


// router.get('/', function(req, res, next){    
//     // render to views/user/add.ejs
//     res.render('login', {
//         title: 'Login',
//         email: '',
//         password: ''    
//     })
// })

// router.post('/checkLogin', function(req, res, next) { 

//         conn.query(`SELECT * FROM users WHERE username = "${req.body.usernmae}" AND email="${req.body.email} AND BINARY password = "${req.body.password}"`, function(err, rows, fields) {
//         console.log(rows.length);
//         if (rows.length <= 0) {
//             req.flash('error', 'Invalid credentials Please try again!')
//             res.redirect('/login')
//         }
//         else {              
//             req.session.loggedin = true; 
//             req.session.id= rows[0].id;
//             // req.session.first_name = rows[0].first_name;
//             // req.session.last_name = rows[0].last_name;
//             // req.session.username = rows[0].username;
//             // req.session.email = rows[0].email;
//             // req.session.password = rows[0].password;
//             // res.session.id = rows[0].id;
//             // res.session.role = rows[0].role_id;
//             res.redirect('/admin');

//         }  
      
//     {              
//             req.session.loggedin = true;
//             req.session.id = rows[1].id;
//             req.session.last_name = rows[1].last_name;
//             req.session.username = rows[1].username;
//             req.session.email = rows[1].email;
//             req.session.password = rows[1].password;
//             res.session.id = rows[1].id;
//             res.session.role = rows[1].role_id;
            
//             if (rows[0].role_id == 1) {
//                 res.redirect("/add-booking");
//               } else if (rows[0].role_id == 2) {
//                 res.redirect("/tourDash");
//               } else if (rows[0].role_id == 3) {
//                 res.redirect("/staff");
//               } else {
//                 res.redirect("/");
//               }
//             } else {
//               req.session.loggedin = false;
//               res.redirect("/login");
//             }
          

//     })
  
// })

// router.get('/logout', function (req, res) {
//     req.session.destroy();
//     res.redirect('/login');
//   });

// module.exports = router;