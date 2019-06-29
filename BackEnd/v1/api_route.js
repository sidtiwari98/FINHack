let express = require('express');
let router = express.Router();

let send_info = require('./controllers/send_info');

router.post('/send_info', send_info);

module.exports = router;