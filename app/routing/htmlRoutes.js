const path = require('path');
const htmlRouters = function(app) {
    this.app = app;
    this.initialize = function() {
        this.app.get('/', function(req, res) {
            res.sendFile(path.join(__dirname, '../../app/public/home.html'));
        });
        this.app.get('/survey', function(req, res) {
            res.sendFile(path.join(__dirname, '../../app/public/survey.html'));
        });
        this.app.get('/choosenfiles/:fileName', function(req, res) {
            res.sendFile(path.join(__dirname, '../../node_modules/chosen-js/' + req.params.fileName));
        });
    };
};

module.exports = {
    htmlRouters
};