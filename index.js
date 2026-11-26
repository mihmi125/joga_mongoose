const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const connectToDatabase = require('./database/connection');
const Application = require('./app');

const start = async () => {
    try {
        await connectToDatabase();

        const application = new Application(mongoose);
        application.start();

    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exitCode = 1;
    }
};

start();