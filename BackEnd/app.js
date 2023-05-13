const express = require("express");
const bodyParser = require("body-parser");

const todoRouter = require("./src/todos/todo.routes");
const auth = require("./src/auth/auth.routes");
const users = require("./src/users/users.routes");

const app = express();
app.use(bodyParser.json());

app.use("/todos", todoRouter);
app.use("/auth", auth);
app.use("/users", users);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
