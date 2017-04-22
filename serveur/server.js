/**
 * Created by Orkun on 20/04/17.
 */
// le code de serveur pour lancer le serveur sur le port 4000
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var cors = require('cors');
// use it before all route definitions
var app = express();
var port = 4000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/', index);
app.use('/api', tasks);
app.listen(port, function () {
    console.log('Server started on port ' + port);
});
//# sourceMappingURL=server.js.map