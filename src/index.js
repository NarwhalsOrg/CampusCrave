import connectToMongoDB from './db/mongodb.db.js';
import { app } from './app.js';
import config from './config/index.js';




/**
 * This ensures that the server only runs when it can successfully connect to the database, preventing potential issues with handling requests without a database connection.
 * 
 * @returns {void}
 */
connectToMongoDB().then(() => { 
    try {
        app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}\n
                URL: http://localhost:${config.PORT}${config.API_BASE_URL}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});

