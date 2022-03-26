import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BookDetails from './BookDetails'

import { useQuery } from '@apollo/client'
import { getBooks } from '../graphql-client/queries'

const BookList = () => {
	const [selectedBook , setSelectedBook] = useState(null);
	const { loading, error, data } = useQuery(getBooks)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

	return (
		<Row>
			<Col xs={8}>
				<CardGroup className='flex flex-wrap'>
					{
						data.books.map(book => (
							<Card
							key={book.id}
							border='info' 
							text='info' 
							style={{ minWidth: '15rem' }}
							className='m-2 text-center shadow'
							onClick={() => setSelectedBook(book.id) } 
							>
							<Card.Body>{book.name}</Card.Body>
						</Card>
						))
					}
				</CardGroup>
			</Col>
			<Col>
				<BookDetails bookId={selectedBook}/>
			</Col>
		</Row>
	)
}

export default BookList
