const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT ? process.env.PORT : 3000;

// set up my app to parse json body payload
app.use(express.json());

// set up cors to allow requests from different origins (ip addresses)
app.use(cors());

// Replaced by MongoDB db
const destinations = [
  {
    name: "Eiffel Tower",
  },
];

app.get("/destinations", (req, res) => {
  res.send(destinations);
});

app.post("/destinations", (req, res) => {
  // Save it in my destinations db
  destinations.push(req.body);

  res.json({ success: "true" });
});

app.listen(PORT, () => {
  console.log(
    `Server is up and listening. Ready to receive requests on PORT: ${PORT}`
  );
});
