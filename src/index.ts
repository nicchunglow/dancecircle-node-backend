// index.ts
import "dotenv";
import sequelize from "@/src/utils/db";
import app from "@/src/app";

const PORT = process.env.PORT || 3000 || 3001;

sequelize.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});