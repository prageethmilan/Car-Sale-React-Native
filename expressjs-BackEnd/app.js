const express = require('express');
const user = require('./routes/User');


const app = express();
const port = 8000;

app.use(express.json());
app.use('/users',user);


app.listen(port, () => {
    console.log(`App starting on ${port}`);
})