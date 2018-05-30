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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/projects', (req, res) => {
    // Return projects as json
    res.json(projectsData);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);
console.log(`Listening on localhost:${port}`);