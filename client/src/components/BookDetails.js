import { useQuery } from '@apollo/client';
import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import { getSingleBook } from '../graphql-client/queries'

const BookDetails = ({bookId}) => {
	const { loading, error, data } = useQuery(getSingleBook, {
		variables: { id: bookId },
		skip: bookId === null
	});
	if (loading) return <p>Loading...</p>

	const book =  bookId !== null ? data.book : null;

	return (
		<Card bg='info' text='white' className='shadow'>
			<Card.Body>
				{
					book === null ? <Card.Text>No book selected</Card.Text> :
					<Fragment>
						<Card.Title>{book.name}</Card.Title>
						<Card.Subtitle>{book.genre}</Card.Subtitle>
						<p>{book.author.name}</p>
						<p>{book.author.age}</p>
						<p>All books by this author</p>
						<ul>
						{book.author.books.map(book => (
							<li key={book.id}>{book.name}</li>
						))}
						</ul>
					</Fragment>
				}
				
			</Card.Body>
		</Card>
	)
}

export default BookDetails
