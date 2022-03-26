import { gql } from '@apollo/client';

const getBooks = gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`

const getSingleBook = gql`
  query getSingleBookQuery($id: ID!) {
    book(id: $id) {
      name
      id
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

const getAuthors = gql`
  query getAuthorsQuery {
    authors {
      name
      id
    }
  }
`

export { getBooks , getSingleBook , getAuthors }