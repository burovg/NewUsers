const assert = require('assert');
const User = require('../src/user');

describe('deleting user',() => {
    let joe;

    beforeEach((done) => {
        joe = new User({name:'Joe1'});
        joe.save()
        .then(() => {done()});
    });

    it('model instance',(done) => {
        joe.remove()
        .then(() => {
            User.findOne({name:'Joe'});
        })
        .then((user) => {
            console.log(user);
            assert(user === undefined);
            done();
        });
    });

    it('class method remove',(done) => {
        User.remove({name:'Joe'})
        .then(() => {
            User.findOne({name:'Joe'});
        })
        .then((user) => {
            console.log(user);
            assert(user === undefined);
            done();
        });
    });

    it('class method findandremove',(done) => {
        User.findOneAndRemove({name:'Joe1'})
        .then(() => {
            User.findOne({name:'Joe'});
        })
        .then((user) => {
            console.log(user);
            assert(user === undefined);
            done();
        });
    });

    it('class method findoneandremove',() => {

    });
});