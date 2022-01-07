import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const baseUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.json({
    people: baseUrl + "people/",
    starships: baseUrl + "starships/",
    vehicles: baseUrl + "starships/",
  });
});

export default router;
