const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const fetch = require('fetch-everywhere')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes')(app)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

app.listen(port, err => {
  if (err) {
    console.log(err)
  }
  console.log(`Listening on port: ${port}`)
})
