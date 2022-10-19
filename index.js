const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'))
  })
  
  app.use(express.static('public'))

  app.get('/stanley', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'stanley.html'))
  })

  app.post('/comment', (req, res) => {
   // res.send('Got a POST request')


console.log(req.body)

//addToDatabase(req.body.comment)
res.json(req.body)


  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})