"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ToDoLists",
      [
        {
          name: "Coding",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ToDoLists", null, {});
  },
};
