const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`server is listning on port ${process.env.PORT}`);
});
