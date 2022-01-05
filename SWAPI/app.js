"use strict";
import "reflect-metadata";
import express from "express";

import resourceRouter from "./routes/resources.js";
import peopleRouter from "./routes/people.js";
import starshipsRouter from "./routes/starships.js";
import vehiclesRouter from "./routes/vehicles.js";

const app = express();

app.use("/api/", resourceRouter);
app.use("/api/people", peopleRouter);
app.use("/api/starships", starshipsRouter);
app.use("/api/vehicles", vehiclesRouter);
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("App running");
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
  });
});
