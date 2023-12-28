// Create web server
const express = require("express");
const app = express();
const port = 3000;
// Serve static files
app.use(express.static("public"));
// Parse JSON
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Handle POST request to '/comments'
app.post("/comments", (req, res) => {
  const { body } = req;
  const { comment } = body;
  if (!comment) {
    res.status(400).send("Comment is required");
    return;
  }
  console.log(`New comment: "${comment}"`);
  res.status(201).send({ status: "OK" });
});
// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});