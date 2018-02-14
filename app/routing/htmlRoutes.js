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
    };
};

module.exports = {
    htmlRouters
};