let express = require('express');
let router = express.Router();

let send_info = require('./controllers/send_info');
let get_pools = require('./controllers/get_pools');

router.post('/send_info', send_info);
router.get('/get_pools', get_pools);

module.exports = router;