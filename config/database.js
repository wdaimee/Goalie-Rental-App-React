const mongoose = require('mongoose');

//connect to databse using .env file
mongoose.connect(
    process.env.DATABASE_URL,
    {
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});