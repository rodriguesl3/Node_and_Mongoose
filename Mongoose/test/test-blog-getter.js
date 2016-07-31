'use strict';
const Blog = require('./schema-blog-getter');
 const expect = require('chai').expect;
//const assert = require('assert');

describe('BlogPostSchema',()=>{
    const _title = 'nodejs power of c++ of v8';
    
     before((done)=>{
        Blog.create({
            title:_title
        }).then(blog=>{
            
            done();
        });
    });
    after((done)=>{
        Blog.remove({title:_title})
            .then((deleted)=>{
               
                done();
            });
    });

    describe('testing getter',()=>{
        it('title is show with UpperCase',()=>{
           return Blog.findOne({title:_title}).then((blog)=>{
                
                expect(blog.title).to.be.equal(_title.toUpperCase());
            });
        });
    });
});