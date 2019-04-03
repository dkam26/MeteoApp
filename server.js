const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/meteoapp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/meteoapp/index.html'));
});
app.listen(process.env.PORT || 4200);
// Start the app by listening on the default Heroku port
