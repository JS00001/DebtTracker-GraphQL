export default {
	Query: {
		getDebts: async (_, __, { authedUser }) => {
			return authedUser.debts;
		},
	},

	Mutation: {
		addDebt: async (_, { user, amount, date }, { authedUser }) => {
			const exists = authedUser.debts.some((debt) => debt.user === user);

			if (exists)
				authedUser.debts.map((debt) => {
					if (debt.user === user) {
						debt.amount += amount;
						debt.date = date;
					}
				});
			else
				authedUser.debts.push({
					user,
					amount,
					date,
				});

			await authedUser.save();
			return authedUser.debts;
		},
		removeDebt: async (_, { user }, { authedUser }) => {
			authedUser.debts = authedUser.debts.filter((debt) => debt.user !== user);
			await authedUser.save();
			return authedUser.debts;
		},
	},
};
