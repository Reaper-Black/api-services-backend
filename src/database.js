const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apiservices', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Connected to database'))
    .catch(err => console.log(err));