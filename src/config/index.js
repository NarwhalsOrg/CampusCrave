import dotenv from 'dotenv';

dotenv.config();

import { PORT } from '../constants.js';

const config = {
    PORT: process.env.PORT || PORT,
    API_BASE_URL: process.env.API_BASE_URL || '/api',
    app: {
        name: process.env.APP_NAME || 'CampusCrave Backend API',
        version: process.env.APP_VERSION || '1.0.0',
        env: process.env.NODE_ENV || 'development',
        author: process.env.APP_AUTHOR || 'Polarbear',
    }
};

export default config;