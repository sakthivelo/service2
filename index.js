const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/consume', async (req, res) => {
    try {
        const response = await axios.post('http://19.46.224.68:3000/add', {
            num1: 5,
            num2: 7
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});