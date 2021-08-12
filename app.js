const express = require('express');
const morgan = require('morgan');
const app = express();

app.listen(3000);
app.set('view engine', 'html');

app.use(express.static('basic_html'));

app.get('/', (req, res)=>{
    res.render('<h1>hello</h1>')
})
app.get('/snake', (req, res)=>{
    res.render('./basic_html/index.html');
    console.log('rendered the index html');
})  