import express from 'express';
import config from './config/index.js';



const app = express();


/**
 * Application Configuration
 */
app.set('appName', config.app.name);
app.set('version', config.app.version);
app.set('environment', config.app.env);
app.set('author', config.app.author);




app.get('/api', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'Hello World!',
        metadata: {
            name: req.app.get('appName'),
            version: req.app.get('version'),
            environment: req.app.get('environment'),
            author: req.app.get('author')
        }
    });

});



export { app };