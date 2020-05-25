"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phone: DataTypes.INTEGER,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.ToDoList);
  };

  return user;
};
