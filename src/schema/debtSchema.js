import { gql } from 'apollo-server-express';

export default gql`
	" A debt is a debt that a user owes to another user. "
	type Debt {
		" The user that owes the debt. "
		user: String!
		" The amount that the user owes. "
		amount: Float!
		" The date that the debt was created. "
		date: String!
	}
`;
