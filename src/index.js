const express =  require('express');
const app =  express();

require('./database');

app.use(express.json());

app.use('/apiservices',require('./routes/index'));

app.listen(3000);
console.log('Listening on', 3000);