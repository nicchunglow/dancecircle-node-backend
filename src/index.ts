// index.ts
import "dotenv";
import sequelize from "./utils/db";
import app from "./app";

const PORT = process.env.PORT || 3000 || 3001;

sequelize.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});