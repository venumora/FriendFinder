const { friendFinderDataBase } = require('../data/friends');
const sum = (accumulator, currentValue) => accumulator + currentValue;
Array.prototype.diff = function(inputArray) {
    return this.map(function(item, index) { return  Math.abs(item - inputArray[index]); });
};

const apiRouters = function(app) {
    this.app = app;
    this.friendFinderDataBase = new friendFinderDataBase();
    this.initialize = function() {

        this.app.get('/api/friends', function(req, res) {
            res.json(this.friendFinderDataBase.friends);
        }.bind(this));

        this.app.post('/api/friends', function(req, res, next) {
            const data = Object.assign({}, req.body);
            data.score = data.scores.map(function(score){
                return score ? parseInt(score, 10) : 0;
            });
            let closeMatch = null;
            let lastHighScore;

            this.friendFinderDataBase.friends.forEach(friend => {
                let matchingScore = 0;
                let matchingScoreArray = data.score.diff(friend.scores);
                matchingScore = matchingScoreArray.reduce(sum);
                if(lastHighScore === undefined) {
                    lastHighScore = matchingScore;
                }

                if(lastHighScore >= matchingScore) {
                    closeMatch = friend;
                    lastHighScore = matchingScore;
                }
            });
            
            this.friendFinderDataBase.friends.push(data);
            const redirectUrl = `/survey${closeMatch ? `?matchName=${closeMatch.name}&matchImg=${closeMatch.photo}` : ''}`;
            res.redirect(redirectUrl);
        }.bind(this));
    };
};

module.exports = {
    apiRouters
};
