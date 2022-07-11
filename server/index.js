const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.use(express.static('public'));
// app.use('/public/images', express.static('images'));

app.get('/', async(request, response) => {

    response.send(await readFile('./public/index.ejs', 'utf8'));

});
app.get('/home', async(request, response) => {

    response.send(await readFile('./public/index.ejs', 'utf8'));

});
app.get('/cars', async(request, response) => {

    response.send(await readFile('./public/carimobil.ejs', 'utf8'));

});

app.listen(process.env.PORT || 3001, () => console.log(`App available on http://localhost:3001`))