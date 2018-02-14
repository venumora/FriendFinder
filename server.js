const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const { htmlRouters } = require('./app/routing/htmlRoutes');
const { apiRouters } = require('./app/routing/apiRoutes');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

new htmlRouters(app).initialize();
new apiRouters(app).initialize();

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
