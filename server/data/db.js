const Book = require('../models/Book')
const Author = require('../models/Author')
const { modelName } = require('../models/Author')

const mongoDataMethods = {
	getAllBooks: async (condition = null) => {
		return condition === null ? await Book.find() : await Book.find(condition);
	},
	getBookById: async (id) => {
		return await Book.findById(id);
	},
	getAllAuthors: async () => {
		return await Author.find();
	},
	getAuthorById: async (id) => {
		return await Author.findById(id);
	},
	createAuthor: async (args) => {
		const newAuthor = new Author(args)
		return await newAuthor.save()
	},
	createBook: async (args) => {
		const newBook = new Book(args)
		return await newBook.save()
	}
}

module.exports = mongoDataMethods
