"use strict";
module.exports = (sequelize, DataTypes) => {
  const ToDoList = sequelize.define(
    "ToDoList",
    {
      name: DataTypes.STRING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {}
  );
  ToDoList.associate = function (models) {
    ToDoList.belongsTo(models.user);
  };
  return ToDoList;
};
