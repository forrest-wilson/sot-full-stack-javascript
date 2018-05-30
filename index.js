const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

let projectsData = [
    {
        name: 'Portfolio',
        html_url: 'https://forrest-wilson.com',
        description: 'This is my custom portfolio'
    }
];

app.get('/api/projects', (req, res) => {
    // Return projects as json
    res.json(projectsData);
});

app.listen(port);
console.log(`Listening on localhost:${port}`);