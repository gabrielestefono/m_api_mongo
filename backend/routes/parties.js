const router = require('express').Router();
const partyController = require("../controllers/partyController");

router.route('/party').get((req, res)=>res.send('Teste'));

module.exports = router;