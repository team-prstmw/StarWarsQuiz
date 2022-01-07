import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("sqlite://test.db");
