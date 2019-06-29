let express = require('express');
let router = express.Router();

let send_info = require('./controllers/send_info');
let get_pools = require('./controllers/get_pools');
let get_risk_class_percent = require('./controllers/get_risk_class_percent');
let get_some_shit = require('./controllers/get_some_shit');
let send_2fa = require('./controllers/send_2fa');

router.post('/send_info', send_info);
router.get('/get_pools', get_pools);
router.get('/get_risk_class_percent', get_risk_class_percent);
router.get('/get_some_shit', get_some_shit);
router.get('/send_2fa', send_2fa);

module.exports = router;