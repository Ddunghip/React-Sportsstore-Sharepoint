const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
app.get('/api/hello', (req, res) => {

    const getBreeds = async () => {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data.data))
        } catch (error) {
            console.error(error)
        }
    }
    let a = getBreeds();
    res.send({ a });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));