# ⭐DebtTracker-GraphQL

DebtTracker is an app created to help users keep track of who owes them money. This repository contains the GraphQL backend for the project.

## 🚀 Problem
I constantly find myself forgetting who I have not collected owed money from. I set out to fix this with DebtTracker. 


## ❤️ The Solution
- DebtTracker allows you to add users and the amount of money that they currently owe. 
- The user can add debts and delete debts.


## 🔨 Setup
- Make sure you have `NodeJS` installed.
- Clone this project
- Open a command prompt in the projects folder, and run `npm install`
- Create a `.env` file with the following contents

```
NODE_ENV="development"
PORT=3000

MONGODB_URI="PRODUCTION DATABASE URI"
MONGODB_URI_DEV="DEVELOPMENT DATABASE URI"

JWT_SECRET="YOUR SECRET"
```
- Once the installation has completed, run `npm run dev` to run the application in develope mode.
- Navigate to https://localhost:3000

| Endpoint | Method | Purpose |
| -- | -- | -- |
|`/login` | **POST** | Login to a user's account |
| `/register` | **POST** | Register an account | 
| `/graphql` | **-** | Access the GraphQL Queries and Mutations |
