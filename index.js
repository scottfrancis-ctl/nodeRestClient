const express = require('express');
const app = express();

const port = 3000;

const typicode = require('./indexTypicodeHostRef');

app.get('/', (req, res) => {
    res.send("hello world");
    res.send(`${typicode.byIdResult}`);
    //res.send(typicode.byIdResult);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)  // note the backticks, not quotes. otherwise port display is literal
})

// module.exports = app;
