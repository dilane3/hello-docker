require("dotenv").config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.listen(PORT, () => {
  console.log(`Server is up on https://localhost:${PORT}`)
})