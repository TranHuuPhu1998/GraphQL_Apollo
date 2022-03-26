import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BookFrom from './BookFrom'
import AuthorForm from './AuthorForm'

const Forms = () => {
	
	return (
		<Row>
			<Col>
				<BookFrom/>
			</Col>

			<Col>
				<AuthorForm/>
			</Col>
		</Row>
	)
}

export default Forms
