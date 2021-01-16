const express = require('express')
const path =require('path')
const cors = require('cors')
const port =3000
//cors domain server listing maintain


//making application
const app =express()
//adding middle wear for domain listing 
app.use(cors())
// adding ejs template engin
app.use(express.urlencoded({extended:true})) 
app.set('view engine', 'ejs');
// setting views path folder
app.set('views', path.join(__dirname,'views'))
//console.log(__dirname)
// setting public directory for sharing logo pic file etc
app.use(express.static(path.join(__dirname,'../','public')))

app.get('/', function(req, res) {
    res.render('pages/index');
});


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})