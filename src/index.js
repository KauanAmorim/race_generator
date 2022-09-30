const express = require('express');
const routerRace = require('./routes/race.routes');
const app = express();

app.use(express.json());
app.use(routerRace)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});