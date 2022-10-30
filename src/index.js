const path = require('path')
const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
const handlebars = require('express-handlebars')

const route = require('./router')


//lấy dữ liệu từ post phải sd urlencoded
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//static link
app.use(express.static(path.join(__dirname, 'public')))

//logger http
app.use(morgan('tiny'))

//express handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'component/views'));


route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})