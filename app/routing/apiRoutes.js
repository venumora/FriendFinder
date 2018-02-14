const { friendFinderDataBase } = require('../data/friends');
const apiRouters = function(app) {
    this.app = app;
    this.friendFinderDataBase = new friendFinderDataBase();
    this.initialize = function() {

        this.app.get('/api/friends', function(req, res) {
            res.json(this.friendFinderDataBase.friends);
        }.bind(this));

        this.app.post('/api/friends', function(req, res) {
        });
    };
};

module.exports = {
    apiRouters
};
