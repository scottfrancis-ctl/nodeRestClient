const express = require('express');
const app = express();

const port = 3000;

//const typicode = require('./indexTypicodeHostRef');

app.use(express.json());  // middleware

app.get('/', (req, res) => {
    res.contentType('application/json');
    res.send("hello world");

    var people = [
        { name: 'Dave', location: 'Atlanta' },
        { name: 'Santa Claus', location: 'North Pole' },
        { name: 'Man in the Moon', location: 'The Moon' }
      ];

    var PeopleJson = JSON.stringify(people);
    
    //res.send(`${typicode.byIdResult}`);
    //res.send(typicode.byIdResult);
    res.send(PeopleJson);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)  // note the backticks, not quotes. otherwise port display is literal
})

// module.exports = app;
