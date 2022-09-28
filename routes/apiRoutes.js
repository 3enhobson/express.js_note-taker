const router = require("express").Router();
const dbJson = require('../db/db.json');

router.get('/notes',(req, res)=> {
    res.json(dbJson);
});

router.post('/notes',(req, res)=> {
    const newNote = {
    id: dbJson.length + 1 ,
    title: req.body.title,
    text: req.body.text
  }
    dbJson.push(newNote);
    res.json(dbJson);
    
});

router.delete('/notes/:id', (req, res) => {
dbJson.splice(req.params.id - 1, 1)
res.json(dbJson)
  });

module.exports = router;