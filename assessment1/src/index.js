const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const itemsRouter = require('./routes/items');
const statsRouter = require('./routes/stats');
require('dotenv').config();
const apiTestRouter = require('./routes/apiTest.js'); 

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 4001;

// Middleware
app.use(cors({ origin: `http://localhost:${PORT}` }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/items', itemsRouter);
app.use('/api/stats', statsRouter);

//@Neke-Chukwu "Added apiTestRouter for testing purposes"
app.use('/ApiTest', apiTestRouter);



// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//@Neke-Chukwu Serve static files in development and run "index.html"
if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname)));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
}


const startServer = async () => {
    // await initruntimeConfig(); 

    const server = app.listen(PORT, () => {
        console.log(`Backend running on http://localhost:${PORT}\n`);

        //@Neke-Chukwu "Added console log for testing with browser"
        console.log(`Click Here Test App From Browser: \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
    });

    const shutdownHandler = (signal) => {
        console.log(`\nCaught ${signal}. Shutting down gracefully...`);
        server.close(() => {
            console.log('Server closed. Port released.');
            process.exit(0);
        });

        setTimeout(() => {
            console.error('Force exiting after timeout');
            process.exit(1);
        }, 5000);
    };

    process.on('SIGINT', () => shutdownHandler('SIGINT'));
    process.on('SIGTERM', () => shutdownHandler('SIGTERM'));
    process.on('uncaughtException', (err) => {
        console.error('Uncaught Exception:', err);
        shutdownHandler('uncaughtException');
    });
};

startServer();