import "babel-polyfill";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import albumRouter from "./routes/album";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import swaggerDocument from "../swagger.json";

dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());
app.use(express());

const PORT = process.env.PORT || 3001;

app.use("/api", albumRouter);

// I am still looking why swaggerui-css is not working
app.get("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () =>
  console.log(`search photo app is listening on port ${PORT}`)
);
