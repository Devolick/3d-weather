import express from "express";

const router = express.Router();

router.get("/:country", (req, res) => {
  const test = {
    name: "test",
  };
  res.status(200).json(test);
});

export default router;
