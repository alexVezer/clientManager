import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

const SearchForm = () => {
  return (
    <Form>
    <InputGroup className="mb-3">
      <FormControl 
        placeholder="Search"
        aria-label="search"
        aria-describedby="search"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Search</Button>
      </InputGroup.Append>
    </InputGroup>
    </Form>
  )
}

export default SearchForm
