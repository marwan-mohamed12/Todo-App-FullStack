# Todo-App-FullStack

This is a simple Todo App that allows users to sign up and sign in to manage their todo list. The app is built with React Native, Node.js, Express.js, prisma and PostgreSQL.

## Installation
1. Clone this repository to your local machine using the following command:
``` 
git clone https://github.com/marwan-mohamed12/Todo-App-FullStack.git
```
2. Navigate to the FrontEnd, BackEnd and install the dependencies:
```
npm install
```
3. Rename the .env.example file to .env and update the DATABASE_URL value with your postgreSQL connection string.
4. Navigate to the Prisma directory and migrate the prisma:
```
npx prisma migrate dev
```
5. Navigate to the BackEnd folder and start the server:
```
node app.js
```
6. Navigate to the FrontEnd directory and start android emulator:
```
npm run android
```
