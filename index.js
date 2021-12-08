express = require ("express");
app = express()
const port = 5000;

const engine = require("express-Handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended : true }))

app.get('/', (req, res) => {
    res.render('formulaire')
})
app.post('/signup', (req,res) => {
    res.send(`bienvenue ${req.body.username}`)
    console.log(req.body)
})



app.listen(port, () => {
    console.log(`serveur is running on ${port}`);
})






