"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ToDoListItems",
      [
        {
          task: "finish todays reader",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "buy bread",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ToDoListItems", null, {});
  },
};
