import "dotenv/config";
import connectDB from "./utils/db";
import app from "./app";

const PORT = process.env.PORT || 3000 || 3001;

connectDB();

const server = app.listen(PORT, () => {
  console.log(`Started Express app on http://localhost:${PORT}`);
});

export default server;
