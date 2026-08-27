import app from "./src/app.js";
import connectDB from "./src/database/db.js";
import authRouter from "./src/routes/auth.route.js";

const port = process.env.PORT || 8000;

app.use("/api", authRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
