import React , {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useQuery , useMutation } from '@apollo/client'
import { getAuthors, getBooks } from '../graphql-client/queries'
import { addSingleBook } from '../graphql-client/mutations'

const BookFrom = () => {
  const [newBook, setNewBook] = useState({name:"", genre:"", authorId:""})

	const { loading, data } = useQuery(getAuthors)

	const [ addBook , ] = useMutation(addSingleBook)

	const onInputChange = (event) => {
		setNewBook({...newBook, [event.target.name]: event.target.value})
	}

	const onSubmit = (event) => {
		event.preventDefault()
		addBook({ 
			variables: { name: newBook.name , genre: newBook.genre , authorId: newBook.authorId },
			refetchQueries: [{ query: getBooks }]
		})
		setNewBook({name:"", genre:"", authorId:""})
	}

  return (
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3">
      <Form.Control 
        type='text' 
        name="name" 
        placeholder='Book name' 
        onChange={onInputChange} 
        value={newBook.name}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Control 
        type='text' 
        name="genre" 
        placeholder='Book genre'
        onChange={onInputChange} 
        value={newBook.genre}	
      />
    </Form.Group>
    <Form.Group className="mb-3">
      { loading ? <p>Loading...</p> : (
        <Form.Control 
          as='select' 
          name="authorId"
          onChange={onInputChange} 
          value={newBook.authorId}	
          >
          <option disabled value="">Select author</option>
          { data.authors.map(author => (
            <option key={author.id} value={author.id}>{author.name}</option>
            ))
          }
        </Form.Control>
      ) }
    </Form.Group>
    <Button className='float-right' variant='info' type='submit'>
      Add Book
    </Button>
  </Form>
  
  )
}

export default BookFrom