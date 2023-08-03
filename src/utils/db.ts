import "dotenv";
import { Sequelize } from "sequelize";

const dbName = "CanILoginDB";

const sequelize = new Sequelize(
  `${process.env.DB_SCHEMA_NAME}`,
  `${process.env.DB_USERNAME}`,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default { Sequelize, sequelize };
