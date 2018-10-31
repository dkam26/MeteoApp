//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/meteoApp'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/meteoapp/index.html'));
// });
app.use(cors());
app.use(express.static('./meteoapp/dist/meteoapp'));
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);