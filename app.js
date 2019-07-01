require("dotenv").config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const mongoose = require("mongoose")
mongoose.set("useFindAndModify", false)

// mongoose.connect(`mongodb://localhost/db_name`, { useNewUrlParser: true })

mongoose.connect(`mongodb+srv://${process.env.ATLAST_NAME}:${process.env.ATLAST_PW}@cluster0-sfchz.gcp.mongodb.net/password_manager_codeAnatomy_02?retryWrites=true`, { useNewUrlParser: true })


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/user')
const passwordRoutes = require('./routes/password')

app.use('/users', userRoutes)
app.use('/passwords', passwordRoutes)

app.listen(port, () => {
    console.log("listening on port" + port)
})