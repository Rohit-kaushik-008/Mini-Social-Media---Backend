import app from "./src/app.js";
import connectDB from "./src/database/db.js";
import authRouter from "./src/routes/auth.route.js";
import customizeRouter from "./src/routes/customizeProfile.route.js";
import postRouter from "./src/routes/post.route.js";

const port = process.env.PORT || 8000;

app.use("/api/auth", authRouter);
app.use("/user/customize", customizeRouter);
app.use("/user/profile", postRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
