'use strict';
const Blog = require('./schema-blog-getter');
const expect = require('chai').expect;

describe('BlogPostSchema',()=>{
    const _title = 'nodejs power of c++ of v8';

    before(done=>{
        Blog.create({
            title:_title
        }).then(blog=>{
            console.log(blog);
            done();
        });
    });
    after(done=>{
        Blog.remove({title:_title})
            .then(deleted=>{
                console.log(deleted.result);
                done();
            });
    });

    describe('testing geetter',()=>{
        it('title is show with UpperCase',()=>{
            Blog.findOne({title:_title})
                .then(blog=>{
                    exepect(blog.title).to.be.equal(_title.UpperCase());
                });
        });
    });
});