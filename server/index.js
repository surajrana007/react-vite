'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const Posts = [
    {
        "author": "suraj",
        "message": "This is React Project 1"
    },
    {
        "author": "Dhrumil",
        "message": "This is React Project 2"
    },
    {
        "author": "Bhagyesh",
        "message": "This is React Project 3"
    },
    {
        "author": "Digvijay",
        "message": "This is React Project 4"
    },
    {
        "author": "Saumil",
        "message": "This is React Project 5"
    },
    {
        "author": "Chintan",
        "message": "This is React Project 6"
    },
    {
        "author": "Jenit",
        "message": "This is React Project 7"
    },
    {
        "author": "Hemanth",
        "message": "This is React Project 8"
    }
];

app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/app', (req, res) => {
  res.json(Posts);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});