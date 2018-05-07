const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


before((done) => {
    mongoose.connect('mongodb://localhost:27017/users_test');
    mongoose.connection
    .once('open',() => {
        done()
    })
    .on('error',(error) => {
        console.warn('Error : ',error);
    });
});



beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        //console.log('done');
        done();
    });
});