import "dotenv/config";
import { Sequelize } from "sequelize";

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const userPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(`postgres://${user}:${userPassword}@localhost:5432/${database}`);

export default sequelize;
