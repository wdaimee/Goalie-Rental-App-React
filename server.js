const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

//api routers
//router for game 
const gameRouter = require('./routes/api/games');
//router for user
const userRouter = require('./routes/api/users');
//router for reviews
const reviewRouter = require('./routes/api/reviews');
//router for arenas
const arenaRouter = require('./routes/api/arenas');


const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api routes
//mount route for game
app.use('/api/games', gameRouter);
//mount router for users
app.use('/api/users', userRouter);
// mount route for user review
app.use('/api/users', reviewRouter);
//mount router for arenas
app.use('/api/arenas', arenaRouter);

//"catch all" route for react SPA
if (process.env.NODE_ENV === 'production') {
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});

