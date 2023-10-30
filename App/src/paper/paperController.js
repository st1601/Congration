const express = require('express')
const session = require('express-session');

const app = express()

const { insertPaper, deletePaper, getDB} = require('./databasePaper');

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '156655hjkkjhgggghgg',
    cookie: { maxAge: 600000 }
}));

app.post('/insert', async (req, res) => {
    const nameInput = req.body.txtName;
    const tirtleInput = req.body.txtTirtle;
    const pictureInput = req.body.txtPicture;
    if(nameInput.length <4){
        res.render("index",{errorMsg:'Ten nho hon 4 ky tu'})
        return;
    }
    const newPaper = { name: nameInput, tirtle: tirtleInput, picture: pictureInput }
    insertPaper(newPaper);
    res.redirect("/");
})

app.get('/delete', async (req, res) => {
    const id = req.query.id;

    await deletePaper(id);
    res.redirect("/");
})

app.post('/search', async (req, res) => {
    const searchInput = req.body.txtSearch;
    const dbo = await getDB()
    const allPapers = await dbo.collection("papers").find({ name: searchInput }).toArray();

    res.render('index', { data: allPapers })
})
    
