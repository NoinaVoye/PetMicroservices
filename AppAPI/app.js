const express = require('express');
const app = express();
const port = 8000;

app.length('/', (req, res) => {
    res.send('Пример, мир!');
});

app.listen(port, () => {
    console.log('Сервер запущен на порту ${port}');
});