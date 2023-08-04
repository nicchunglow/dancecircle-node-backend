import "dotenv";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`postgres://test-user:wrong@localhost:5432/testdb`);

export default sequelize;
