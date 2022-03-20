const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID,
    name : String,
    genre: String,
    author: Author
  }

  # ID! is a non-nullable type
  type Author {
    id: ID!,
    name: String,
    age: Int,
    books: [Book]
  }

  # ROOT TYPE (Query) cho phép truy vấn dữ liệu
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  # ROOT TYPE (Mutation) cho phép thêm, sửa, xóa dữ liệu
  type Mutation {
    createAuthor(id: ID!, name: String!, age: Int!): Author
    createBook(id: ID!, name: String!, genre: String!, authorId: ID!): Book
  }
`

module.exports = typeDefs;