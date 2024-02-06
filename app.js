const express = require('express');
const app = express();
const PORT = 8080;

//Middlware use - convert the body into json
app.use(express.json());

// Endpoint
app.get('/tshirt', (req, res) => {
    // Handler
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })

});

// Endpoint to route params
/*
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    // this cannot be done, come in middleware
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' });
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});
*/

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' });
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);
