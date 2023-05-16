# Todo-App-FullStack

This is a simple Todo App that allows users to sign up and sign in to manage their todo list. The app is built with React Native, Node.js, Express.js, prisma and PostgreSQL.

![My Image](Todo-FullStack.gif)

## Installation
1. Clone this repository to your local machine using the following command:
``` 
git clone https://github.com/marwan-mohamed12/Todo-App-FullStack.git
```
2. Navigate to the FrontEnd, BackEnd and install the dependencies:
```
npm install
or you can just double click the start.sh script and it will install the dependencies for you
```
3. Rename the .env.example file to .env and update the DATABASE_URL value with your postgreSQL connection string.
```
DATABASE_URL = "Put your URL here"
```
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

## Features

1. SignUp 
2. SignIn
3. Authentication and Authorization
4. Todo Management: Once logged in, users can view, add, edit, and delete their todos. 

## Technologies

1. React Native
2. Express.js
3. Prisma
4. PostgreSQL

## Contribution

Contributions are welcome and appreciated! If you would like to contribute to this project, please follow these steps:
1. Fork the project repository.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository with a description of your changes.

Please ensure that your code adheres to the project's coding conventions and standards. We also ask that you provide appropriate documentation and test coverage for any new features or changes.
