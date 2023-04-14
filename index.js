let express = require('express');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

let PORT = 3000 || process.env.PORT;

app.listen(PORT, function() {
    console.log('Listening for requests on port '+PORT);
});