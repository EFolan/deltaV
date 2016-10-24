var express = require('express');

var bookRouter = express.Router();

var books = [
  {
    title: 'East of Eden',
    genre: 'Fiction',
    author: 'John Steinbeck',
    read: true
  },
  {
    title: 'The Grapes of Wrath',
    genre: 'Fiction',
    author: 'John Steinbeck',
    read: false
  },
    {
    title: 'Caves of Steel',
    genre: 'Science-Fiction',
    author: 'Isaac Asimov',
    read: true
  }
];
bookRouter.route('/')
  .get(function(req, res){
    res.render('books', {
      title: 'Books', nav:
      [
        {Link: '/Books', Text: 'Books'}, 
        {Link: '/Authors', Text: 'Authors'}
      ],
      books: books
    });
  });

bookRouter.route('/single')
  .get(function(req, res){
    res.render('books', {
      title: 'Books', nav:
      [
        {Link: '/Books', Text: 'Books'}, 
        {Link: '/Authors', Text: 'Authors'}
      ]
    });
  });

  module.exports = bookRouter;