'use strict';
const User = require('./schema-email');
const expect = require('chai').expect;

describe('testing of schema User',()=>{
    describe('testing of setter to upperCase',()=>{
        it('email only lower case save in mongo',()=>{
            const user = new User({email:'LUCAS.SOUZA@icloud.com'});
            expect(user.email).to.be.equal(user.email.toLowerCase());
        });
    });
});