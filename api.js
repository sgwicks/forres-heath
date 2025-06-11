const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/bubble-bubble', function (req, res) {
  const { toil, trouble } = req.query

  if(typeof(toil) == 'string' && typeof(trouble) == 'string') {
    return res.json("WEIRD SISTERS")
  } else {
    return res.json("Hmm, that doesn't seem right")
  }
})

app.get('/ingredients', function (req, res) {
  res.json({ ingredients: [
    "Your first ingredient will be the EMphasis of your spell",
    "Your second ingredient will make your spell STRONG",
    "Narrow your view to find a way to make your spell function"
  ]})
})

app.get('/favicon.ico', function (req, res) {
  res.status(200)
})

app.listen(5454)