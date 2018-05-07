//import { describe } from 'mocha';

const assert = require('assert');
const User = require('../src/user');


describe("Reading users out of database",() => {

    let Joe;

    beforeEach((done) => {
        Joe = new User({name : 'Joe'});
        Joe.save()
        .then((result) => {
            done();    
        }).catch((err) => {
            
        });
    });
   it('find all users with name Joe',(done) => {
       User.find({name : 'Joe'})
       .then((users) => {
            assert(Joe._id.toString() === users[0]._id.toString())
           done();
       });
   });

   it('find specific user',(done) => {
        User.findOne({_id:Joe._id})
        .then((user) => {
            assert(user.name === 'Joe');
            done();
        });
   });
});

