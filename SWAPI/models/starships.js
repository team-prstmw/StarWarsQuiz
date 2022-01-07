import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Starship = sequelize.define(
  "Starship",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);

Starship.sync({ alter: true });
