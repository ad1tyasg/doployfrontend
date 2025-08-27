const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./db/conn')

const app = express()

app.use(cors())
app.use(express.json())

// Import router
const routes = require(path.join(__dirname, 'routes/records.js'))

// Use all routes (they already define /record, /quiz, etc.)
app.use('/', routes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  db.connectDB()
  console.log("✅ Listening on port: " + port)
})
