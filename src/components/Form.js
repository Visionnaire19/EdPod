import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Form = () => {
    return (
    <Form>
      <Form.Group className="mb-3" controlId="formTopic">
        <Form.Label>Enter topic</Form.Label>
        <Form.Control type="text" placeholder="Enter topic" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Meeting Link</Form.Label>
        <Form.Control type="link" placeholder="Meeting Link" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );

}
export default Form;
