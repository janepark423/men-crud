const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();


dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//로그 요청
app.use(morgan('tiny'));

//바디 파서 parse
app.use(bodyparser.urlencoded({ extended: true }))

//view engine 세팅
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//로드 assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`) });