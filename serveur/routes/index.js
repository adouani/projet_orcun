/**
 * Created by Orkun on 20/04/17.
 */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index.html');
});
module.exports = router;
//# sourceMappingURL=index.js.map