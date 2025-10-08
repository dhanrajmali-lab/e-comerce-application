import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABSENAME,
  process.env.DATABSEUSERNAME,
  process.env.DATABASEPASSWORD,
  {
    host: process.env.DATABASEHOST,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("database is conected !!");
} catch (error) {
  console.log("database is not connectes " + error);
}

export default sequelize;
