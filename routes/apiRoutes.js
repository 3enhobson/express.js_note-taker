const router = require("express").Router();
const dbJson = require('../db/db.json');

router.get('/notes',(req, res)=> {
    res.json(dbJson);
});

router.post('/notes',(req, res)=> {
    const newNote = req.body;
    console.log(newNote);
    dbJson.push(newNote);
    res.json(dbJson);
    
});

router.delete('/notes', (req, res) => {

  });

module.exports = router;