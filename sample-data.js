const ToDoListItems = require("./models").ToDoListItems;

async function createSampleToDoListItems() {
  try {
    const todo1 = await ToDoListItems.create({
      task: "Clean bedroom",
      important: false,
    });
    const todo2 = await ToDoListItems.create({
      task: "Learn to code",
      important: true,
    });
    const todo3 = await ToDoListItems.create({
      task: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

createSampleToDoListItems().then((todos) => console.log(todos));
