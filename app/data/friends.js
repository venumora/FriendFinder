const friendFinderDataBase = function(app) {
  this.friends = [];
  this.friends.push(
      {
        'name': 'Ahmed',
        'photo': 'https://i.ytimg.com/vi/rXMIQDVOs98/hqdefault.jpg',
        'scores': [5, 5, 4, 4, 3, 3, 2, 2, 1, 1]
      },
      {
        'name': 'John',
        'photo': 'http://moziru.com/images/cartoon-network-clipart-cartoon-character-14.jpg',
        'scores': [1, 1, 2, 2, 3, 4, 4, 4, 5, 5]
      },
      {
        'name': 'Ramu',
        'photo': 'http://www.whoa.in/201604-Whoa/Lord-Rama-Art-Image-for-Shree-Ram-Lovers.jpg',
        'scores': [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
      });
};

module.exports = {friendFinderDataBase};