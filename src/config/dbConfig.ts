/* eslint-disable no-undef */
import { Sequelize } from "sequelize";
import { config } from "dotenv";
import mysql2 from "mysql2"; // Import mysql2 as ES module

config(); // Load environment variables

// Define database configuration using environment variables with explicit types
const db = new Sequelize({
  username: process.env.DB_USER || 'root', 
  password: process.env.DB_PASS as string,           
  database: process.env.DB_NAME as string,           
  port: parseInt(process.env.DB_PORT as string, 10) || 3306, // Default MySQL port
  dialect: 'mysql',
  dialectModule: mysql2, // Use mysql2 as the dialect module
});

(async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default db;
