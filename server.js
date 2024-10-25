const express = require('express');
const cors = require('cors');
require('./config/connect');

const heroRoute = require('./routes/hero.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/hero', heroRoute);

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log('server work');
})