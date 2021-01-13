const express = require('express')
const path =require('path')
const cors = require('cors')

//making application
const app =express()
//adding middle wear for domain listing 
app.use(cors())
// adding ejs templete engin
app.set('view engine', 'ejs')
// setting views path folder
app.set('views', path.join(__dirname,'views'))
// setting public directory for sharing logo pic file etc
app.use(express.static(path.join(__dirname,'../','public')))



const port =3000
//cors domain server listing maintain

// for rendering a page
app.get('/',(req,res)=>{
    res.send('<h1>this is simple a page</h1>')
})

// making custom error handlers


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})