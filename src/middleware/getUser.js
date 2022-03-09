import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

const getUser = async (req) => {
	const token = req.headers.authorization;
	const secret = config.JWT_SECRET;

	if (token) {
		try {
			const { username } = jwt.verify(token, secret);
			const data = await User.findOne({ username });

			return data;
		} catch (err) {
			return null;
		}
	}

	return null;
};

export default getUser;
