require('dotenv').config()

const express = require('express')
const app = express()

require('dotenv').config()
const connectDB = require('./config/db')

connectDB();

const methodOverride = require('method-override')


const PORT = 3000 
const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// app.use('/pokemon', pokemonRoutes)
app.use((req, res, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})
app.use(methodOverride('_method'))

const pokemonRoutes = require('./routes/pokemonRoutes')
const pokemon = require('./models/pokemon')


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the pokemonmon App!</h1>')  //response object with 'send' method
})
app.use('/pokemon', pokemonRoutes)

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})