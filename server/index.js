// server/index.js


const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');
const url = require('url');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventsRouter = require('./routes/events.js');

require('dotenv').config();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

const dirname = path.dirname(url.fileURLToPath(require("meta").url));
console.log(dirname);
console.log(path.resolve(dirname, '../client/build'));
// Have Node serve the files for our built React app
app.use(express.static(resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.use('/api/events', eventsRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../client/build', 'index.html'));
});


const CONNECT_URL = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECT_URL,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }).error(err => {
        console.log(err);
        console.log('Error connecting to MongoDB');
        console.log(CONNECT_URL);
    });
