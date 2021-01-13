const express = require('express')
const path =require('path')
const cors = require('cors')
const port =3000
//cors domain server listing maintain

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





// for rendering a page
app.get('/',(req,res)=>{
   // throw new Error('testing error');
    res.send('<h1>this is simple a page</h1>')
})

// making custom error handlers
app.use((req, res, next)=>{
    const error =new Error('404 not found');
    error.status = 404;
    next(error);
    });

app.use((error, req, res, next)=>{
    //console.log(error);
    if(error.status === 404){
        res.status(404);
        return res.render('errors/404');
    }
  res.status(500);
  res.render('errors/500');
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})