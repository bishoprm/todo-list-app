"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "ToDoListItems", // model name
      "important", // new column name
      { type: Sequelize.BOOLEAN }, // new column configs (type, unique, allowNull..)
      {} // optional query configs
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("ToDoListItems", "important", {});
  },
};
