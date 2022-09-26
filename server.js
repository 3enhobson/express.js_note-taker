const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const path = require('path')
const apiRoutes = require("./routes/apiRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.use("/api", apiRoutes);

//must come last
app.listen(PORT, () => console.log('App running.'));

