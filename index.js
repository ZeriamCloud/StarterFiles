const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')
const publicPath = path.join(__dirname, './public')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})