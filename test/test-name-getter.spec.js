'use strict';
const mongoose = require('mongoose');
const util = require('util');
const expect = require('chai').expect;


const Schema = require('../user/schema');
const User = mongoose.model('User', Schema);
const _user = {
                name: 'lucas rodrigues'
            ,   password: '321221'
            ,   email: 'lucas.souza@test.com'
            ,   type: 'developer'
            };



describe('testing of Schema User', ()=>{
    

    // before(done=>{
    //     User.create({
    //         name:_user.name
    //     ,   password:_user.password
    //     ,   email: _user.email
    //     ,   type: _user.type
    //     }).then(user=>{
    //             console.log('passei');
    //             done();
    //         });
    // });

    // after((done)=>{
    //     User.remove({email:_user.email})
    //         .then((deleted)=>{
    //             util.log(deleted.result);
    //             done();
    //         });
    // });

    // describe('testing of getter to upperCase',()=>{
    //     it('name only upperCase to get from mongo',()=>{
    //         User.findOne(_user).then((data)=>{
    //                 console.log(data);
    //                 expect(user.name).to.be.equal('asdfas');
    //         });
    //     });
    // });
})
