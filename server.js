const express = require('express')
const app = express()
const path = require('path')


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, './client', 'build', 'index.html'))
})



app.get('/welcome', (req, res) => {
    res.send('Welcome to poland!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})