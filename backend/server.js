import express from "express";
import cookieParser from "cookie-parser";

// Import environment variables
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";

const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
