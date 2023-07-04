import "dotenv";
import mongoose from "mongoose";

const dbName = "CanILoginDB";
const dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/" + dbName;

const connection = async () => {
  mongoose.connect(dbUrl);
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log(`You are now connect to ${dbName} server at ${dbUrl}`);
});

export default connection;
