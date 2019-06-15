const Book = require('../models/Book');

const defaultBookOption = {
  orderPeople: "5d03a7cd136bfe0059f7ef45",
  field: "5d03b1ba7387e9004006bed7",
  startHour: 19,
  duration: 1,
  bookDate: "2019-06-15",
};

module.exports = new Promise((resolve, reject) => {
  const findBook = Book.findOne();

  Promise.all([
    findBook,
  ])
    .then(([
      foundBook
    ]) => {
      const newBook = new Book(defaultBookOption);

      const createdBook = foundBook ? null : newBook.save();

      return Promise.all([
        createdBook,
      ]);
    })
    .then(result => resolve(result))
    .catch(e => reject(e));
});
