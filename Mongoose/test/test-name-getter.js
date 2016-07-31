'use strict';
const mongoose = require('mongoose');
const Schema = require('../user/schema');
const User = mongoose.model('User', Schema);
const expect = require('chai').expect;

describe('testing of Schema User', ()=>{
    const _user = {
        name: 'lucas rodrigues'
    ,   password: '321221'
    ,   email: 'lucas@test.com'
    ,   type: 'developer'
    };
    
    before((done)=>{
        User.create(_user)
            .then(usr=> {
                done();
        });
    });

    after((done)=>{
        User.remove({email:_user.email})
            .then((deleted)=>{
                console.log(deleted.result);
                done();
            });
    });

    describe('testing of getter to upperCase', ()=>{
        it('name only upperCase to get from mongo',()=>{
           return User.findOne(_user).then((usr)=>{
                expect(usr.name).to.be.equal(_user.name.toUpperCase());
                expect(usr.name).to.be.an('string')
                                .and.contain('LUC');
            });
        });
        it('Testin User Object',()=>{
              return User.findOne(_user).then((usr)=>{
                expect(usr).to.exist;
                expect(usr).and.to.have.any.keys('save');
                expect(usr).to.have.property('name')
                           .and.not.equal(_user.name);
              });   
        });
    });
});
