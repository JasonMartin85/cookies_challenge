
const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
const port = 8080;

app.use(cookieParser())



app.listen(port, () => console.log(`Server listening on port ${port}`))


app.get("/login", (req,res) => {
  var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'strict',
  }
  res.cookie('name','Jason',opts)
  res.status(200).send('cookie created!')
})

app.get("/hello", (req,res) => {
  res.status(200).send('Hello ' + req.cookies.name + '!')
})





