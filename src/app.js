//console.log('hi suhel how r u?')

const express = require('express')
const app =express()
const port =3000

// for rendering a page
app.get('/',(req,res)=>{
    res.send('<h1>this is simple a page</h1>')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})