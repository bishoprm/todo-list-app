"use strict";
module.exports = (sequelize, DataTypes) => {
  const ToDoListItems = sequelize.define(
    "ToDoListItems",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      createdAt: new Date(),
      updatedAt: new Date(),
      important: DataTypes.BOOLEAN,
    },
    {}
  );
  ToDoListItems.associate = function (models) {
    ToDoListItems.belongsTo(models.ToDoList);
  };
  return ToDoListItems;
};
