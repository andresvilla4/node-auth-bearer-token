const express = require('express');
require('../db/users/connect');

const app = express();

app.use(require('../routes/request_processor'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});