import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		" Get all debts owed to the current user. "
		getDebts: [Debt!]!
	}

	extend type Mutation {
		" Add a debt owed to the current user. "
		addDebt(user: String!, amount: Float!, date: String!): [Debt!]!
		" Remove a debt owed to the current user. "
		removeDebt(user: String!): [Debt!]!
	}

	type User {
		" The username of the user. "
		username: String!
		" The debts owed to a user. "
		debts: [Debt!]!
	}
`;
