const ToDoListItems = require("./models").ToDoListItems;
const User = require("./models").user;

// 1. search for all users and logs them

async function getUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}
// getUsers().then((users) => console.log("USERS:", users));

// 2. search for all items on to do list
async function getToDoItems() {
  const allToDoItems = await ToDoListItems.findAll();
  return allToDoItems.map((item) => item.get({ plain: true }));
}
// getToDoItems().then((item) => console.log("TO DO ITEMS:", item));

// 3. search for user by primary key
async function getUserByPk(key) {
  const user = await User.findByPk(key);
  return user ? user.get({ plain: true }) : "Not found!";
}

// getUserByPk(1).then((result) => console.log(result));

// 4. create a new user
async function createNewUser() {
  try {
    const user1 = await User.create({
      name: "rose",
      email: "myemail@email.com",
      phone: 12345678,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return [user1].map((user) => user.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

// createNewUser().then((user) => console.log("NEW USER:", user));

///from solution
// async function newUser({ name, email, phone }) {
//     const newUser = await User.create({ name, email, phone });
//     return newUser.get({ plain: true });
//   }

// newUser().then(result => console.log(result));
//// end solution

// 5. search only for important to do items
async function importantTodos() {
  const todos = await ToDoListItems.findAll({ where: { important: true } });
  return todos.map((todo) => todo.get({ plain: true }));
}

importantTodos().then((result) => console.log(result));
