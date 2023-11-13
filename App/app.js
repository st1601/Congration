const express = require('express')
const session = require('express-session');
const app = express()
// const routes = require('./routes/routes');
// const mongoose = require('mongoose');
// const cors = require('cors');
// mongoose.connect("mongodb://localhost:27017/Congration");

const { insertUser,getRole,insertMusic, deleteMusic, insertPaper, deletePaper} = require('./databaseHandler');

const bodyParser = require('body-parser');

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


// Middleware for parsing JSON requests
app.use(bodyParser.json());

//Users


// Login

app.get('/login',(req,res)=>{
    res.send
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

//Paper
app.post('/insertp', async (req, res) => {
    const nameInput = req.body.txtName;
    const tirtleInput = req.body.txtTirtle;
    const pictureInput = req.body.txtPicture;
    if(nameInput.length <4){
        res.render("index",{errorMsg:'Ten nho hon 4 ky tu'})
        return;
    }
    const newPaper = { name: nameInput, tirtle: tirtleInput, picture: pictureInput }
    insertPaper(newPaper);
    res.redirect("");
})

app.get('/deletep', async (req, res) => {
    const id = req.query.id;

    await deletePaper(id);
    res.redirect("/");
})

app.post('/searchs', async (req, res) => {
    const searchInput = req.body.txtSearch;
    const dbo = await getDB()
    const allPapers = await dbo.collection("papers").find({ name: searchInput }).toArray();

    res.render('index', { data: allPapers })
})

//Music

app.post('/insertm', async (req, res) => {
    const nameInput = req.body.txtName;
    const tirtleInput = req.body.txtTirtle;
    const pictureInput = req.body.txtPicture;
    if(nameInput.length <4){
        res.render("index",{errorMsg:'Ten nho hon 4 ky tu'})
        return;
    }
    const newMusic = { name: nameInput, tirtle: tirtleInput, picture: pictureInput }
    insertMusic(newMusic);
})

app.get('/editm', async (req, res) => {
    const id = req.query.id;

    const s = await getMusicById(id);
    res.render("editm", { music: m });
})

app.get('/deletem', async (req, res) => {
    const id = req.query.id;

    await deleteMusic(id);
    res.redirect("/");
})

app.post('/searchm', async (req, res) => {
    const searchInput = req.body.txtSearch;
    const dbo = await getDB()
    const allMusic = await dbo.collection("musics").find({ name: searchInput }).toArray();

    res.render('index', { data: allMusics })
})

function checkLogin(req,res,next){
    if(req.session["User"] == null){
        res.redirect('/login')
    }else{
        next()
    }
}


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });