import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import React from 'react';

const ITSearch = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <InputGroup className="mb-3 search-bar-input-group">
          <Form.Control
            placeholder="Ask a question"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="btn-group"><Search /></InputGroup.Text>
        </InputGroup>
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Welcome to this template</h1>
        <p>Now get to work and modify this app!</p>
      </Col>

    </Row>
  </Container>
);

export default ITSearch;
