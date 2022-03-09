import { success } from 'consola';
import mongoose from 'mongoose';
import config from '../config';

export default {
	connect: () => {
		return new Promise((resolve, reject) => {
			mongoose
				.connect(config.MONGODB_URI)
				.then(() => {
					resolve(success(`Connected to ${config.NODE_ENV} database`));
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
};
