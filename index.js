const express = require('express');
const app = express();
const port = process.env.APP_PORT || 6000;

var redis = require("redis"),
    client = redis.createClient({host: process.env.REDIS_URL});

app.get('/', (req, res) => {
  client.incr("counter", (_,counter) => { res.send(`Counter ${counter}`) } )
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));