const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(3000);
app.set('view engine', 'ejs');

app.use(express.static('views'));
app.use(express.static('views/snake_copy'));
// app.use(express.static('views/snake_copy'))

app.get('/', (req, res)=>{
    res.render('./index')
})

app.get('/snake', (req, res)=>{
    res.render('./snake_copy/snake')
})
// app.get('/snake', (req, res)=>{
    // res.render('./basic_html/index.html');
//     console.log('rendered the index html');
// })
