import { success, info } from 'consola';
import express from 'express';
import cors from 'cors';

import server from './server';
import config from './config';
import database from './database';
import login from './routes/login';
import register from './routes/register';
import bodyParser from 'body-parser';

async function startServer() {
	const app = express();

	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: false }));

	await database.connect();

	await server.start();
	server.applyMiddleware({ app });

	app.post('/login', login);
	app.post('/register', register);

	app.listen(config.PORT, () => {
		success(`Server ready at http://localhost:${config.PORT}${server.graphqlPath}`);
		info(`Server running in ${config.NODE_ENV} mode`);
	});
}

startServer();
