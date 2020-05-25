"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "ToDoLists", // model name
      "userId", // new column name
      {
        type: Sequelize.INTEGER, // new column configs
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
    await queryInterface.addColumn(
      "ToDoListItems", // model name
      "todoListId", // new column name, referencing toDoLists
      {
        type: Sequelize.INTEGER, // new column configs
        references: {
          model: "ToDoLists",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    // optional query configs
    await queryInterface.removeColumn("ToDoLists", "userId");
    await queryInterface.removeColumn("ToDoListItems", "todoListId");
  },
  // up: async (queryInterface, Sequelize) => {
  //   await queryInterface.addColumn(
  //     "ToDoListItems", // model name
  //     "todoListId", // new column name, referencing toDoLists
  //     {
  //       type: Sequelize.INTEGER, // new column configs
  //       references: {
  //         model: "ToDoLists",
  //         key: "id",
  //       },
  //       onUpdate: "CASCADE",
  //       onDelete: "SET NULL",
  //     }
  //   );
  // },
  // down: async (queryInterface, Sequelize) => {
  //   // optional query configs
  //   await queryInterface.removeColumn("ToDoListItems", "todoListId");
  // },
};
