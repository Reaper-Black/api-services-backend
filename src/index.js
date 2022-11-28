const express =  require('express');
const app =  express();
const cors =  require('cors')

require('./database');

app.use(cors())
app.use(express.json());

app.use('/apiservices',require('./routes/index'));
app.use('/apiservices',require('./routes/indexProducts'));

app.listen(3000);
console.log('Listening on', 3000);