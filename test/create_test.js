const assert = require('assert');
const User = require('../src/user');

describe('Creating records',() => {
    it('save a user ',(done) => {
        const joe = new User({name : 'Joe'});
        joe.save()
        .then((result) => {
            //console.log(done);
            assert(!joe.isNew);   
            done();
        }).catch((err) => {
            console.log(err);
        });
    });
});