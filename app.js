const express = require('express');
const logger = require('./graylog');

const app = express();

app.get('/', (req, res) => {
    logger.log({"data": "home"});
    res.send({"data": "home", "status": 200});
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})
