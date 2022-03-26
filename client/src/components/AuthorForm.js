import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useMutation } from "@apollo/client";
import { getAuthors } from "../graphql-client/queries";
import { addSingleAuthor } from "../graphql-client/mutations";
 
const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState({ name: "", age: "" });

  const [addAuthor, ] = useMutation(addSingleAuthor);

  const onInputChange = (event) => {
    setNewAuthor({ ...newAuthor, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, age } = newAuthor;
    addAuthor({
      variables: { name, age : parseInt(age) },
      refetchQueries: [{ query: getAuthors }],
    });
    setNewAuthor({ name: "", age: "" });
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="invisible mb-3">
        <Form.Control />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Author name"
          name="name"
          onChange={onInputChange}
          value={newAuthor.name}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          placeholder="Author age"
          name="age"
          onChange={onInputChange}
          value={newAuthor.age}
        />
      </Form.Group>
      <Button className="float-right" variant="info" type="submit">
        Add Author
      </Button>
    </Form>
  );
};

export default AuthorForm;
