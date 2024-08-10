import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.send("hi from server");
});

app.listen(8000, () => {
  console.log(
    "Server is listening on Port ",
    8000,
    "in",
    "development",
    "mode"
  );
});
