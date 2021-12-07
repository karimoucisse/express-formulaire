express = require ("express");
app = express()
const port = 5000;

app.listen(port, () => {
    console.log(`serveur is running on ${port}`);
})

app.get('/', (req,res) => {
    res.send('home')
})