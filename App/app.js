const express = require('express')
const session = require('express-session');
const app = express()
// const routes = require('./routes/routes');
// const mongoose = require('mongoose');
// const cors = require('cors');
// mongoose.connect("mongodb://localhost:27017/Congration");

const { insertUser,getRole } = require('./databaseHandler');

app.set('view', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
// app.use(cors());
// app.use(express.json());
// app.use(routes);

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '156655hjkkjhgggghgg',
    cookie: { maxAge: 600000 }
}));
// Register
app.post('/register',async (req,res)=>{
    const name = req.body.txtName;
    const pass = req.body.txtPassword;
    const role = req.body.role;
    insertUser({name:name,pass:pass,role:role})
    res.redirect('/login')
})

// Login
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/doLogin',async (req,res)=>{
    const name = req.body.txtName;
    const pass = req.body.txtPassword;
    console.log(name)
    //get role from database: could be "-1", admin, customer
    var role = await getRole(name,pass);
    if(role != "-1"){
        req.session["User"] = {
            name: name,
            role: role
        }
    }
    res.redirect('/');
})

app.get('/', checkLogin, async (req, res) => {
    const dbo = await getDB();
    const allPeoples = await dbo.collection("peoples").find({}).toArray();
    res.render('index', { data: allPeoples, auth :req.session["User"] })
})

app.get('/noLogin',checkLogin,(req,res)=>{
    res.render('noLogin')
})

function checkLogin(req,res,next){
    if(req.session["User"] == null){
        res.redirect('/login')
    }else{
        next()
    }
}

const PORT = process.env.PORT || 5001;
app.listen(PORT)
console.log("app is running ", PORT)