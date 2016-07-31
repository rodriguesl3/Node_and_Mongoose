'use strict';

const User = require('./schema-age');
const expect = require('chai').expect;

describe('User Validate',()=>{
    describe("validate age of user with 18 or more",()=>{
        it('age only accept 18 or more years',()=>{
            let u = new User();
            u.age =24;
            expect(u.validateSync()).to.be.undefined;
        });
    });

    describe("validate age of user with less 18",()=>{
        it('age less of 18 not accept',()=>{
            let u = new User();
            u.age =11;
            const validate = u.validateSync();
            expect(validate.message).to.be.eq('user validation failed');
            expect(validate.errors).to.be.exist;
        });
    });


})