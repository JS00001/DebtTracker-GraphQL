import dotenv from 'dotenv';
dotenv.config();

const config = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	PORT: parseInt(process.env.PORT) || 3000,
	JWT_SECRET: process.env.JWT_SECRET,
};

const prodEnv = {
	...config,
	MONGODB_URI: process.env.MONGODB_URI,
};

const devEnv = {
	...config,
	MONGODB_URI: process.env.MONGODB_URI_DEV,
};

const envConfig = config.NODE_ENV === 'production' ? prodEnv : devEnv;

export default envConfig;
