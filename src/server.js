import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import getUser from './middleware/getUser';
import * as Models from './models';
import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		const authedUser = await getUser(req);

		if (!authedUser) throw new AuthenticationError('You must be logged in to access this resource');

		return {
			authedUser,
			...Models,
		};
	},
});

export default server;
