const app = require('express')();
const PORT = 8080;

// Endpoint
app.get('/tshirt', (req, res) => {
    // Handler
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })

});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);
