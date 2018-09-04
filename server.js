const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cookieParser())
app.use(cors())
const port = process.env.PORT || 5000; // The default port is 5000 but you can change this


// This line tells the node server to redirect any traffic to index.html
// From there, React will take over and you can define your routes in main.js
app.get('/*', (req, res) => res.sendFile(path.join(__dirname+'/public/index.html')));

app.listen(port, () => console.log(`Listening on port ${port}`));