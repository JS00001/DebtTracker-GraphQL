import User from '../models/User';

export default async function (req, res) {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({
			error: 'Username and password are required',
		});
	}

	const user = await User.findOne({ username });

	if (!user) {
		return res.status(400).json({
			error: 'Username or password is incorrect',
		});
	}

	const isMatch = await user.comparePassword(password);

	if (!isMatch) {
		return res.status(400).json({
			error: 'Username or password is incorrect',
		});
	}

	const token = user.generateAuthToken();

	return res.status(200).json({
		statusCode: 200,
		token,
	});
}
