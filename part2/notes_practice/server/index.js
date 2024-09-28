const notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: false,
  },
  {
    id: "4",
    content: "Hii, Deep here",
    important: false,
  },
  {
    id: "5",
    content: "I am learning to code",
    important: true,
  },
  {
    id: "6",
    content: "Jiya is pretty",
    important: true,
  },
  {
    id: "0fed",
    content: "Doing this",
    important: false,
  },
  {
    id: "[object Undefined]",
    content: "hello",
    important: true,
  },
  {
    id: 9,
    content: "hello again",
    important: false,
  },
];
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());
const allowed_domain = "http://localhost:5173";
app.use(
  cors({
    origin: allowed_domain,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>In the server</h1>");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  const note = req.body;
  notes.push(note);
  res.send(note.json);
});

//to get a single note
app.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id == id);
  if (note) {
    res.send(note);
  } else res.status(404, "No data found").end();
});

//delete request
app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.listen(3001, () => console.log("Listening to port 3001"));
console.log("Hello");
console.log("Here i am");
