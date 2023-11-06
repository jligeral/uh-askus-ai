import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import React from 'react';
import ChatItem from './ChatItem';

const chatMessages = [
  { role: 'assistant', content: 'Hello! How can I assist you today?' },
  { role: 'user', content: 'I have a question about a product.' },
  { role: 'assistant', content: "Sure, I'd be happy to help. What's your question?" },
  { role: 'user', content: 'Can you provide more details about the pricing?' },
  { role: 'assistant', content: 'Of course. The pricing varies based on the product and your location. Please provide the product name and your location for accurate information.' },
  { role: 'user', content: "The product is XYZ and I'm located in New York." },
  { role: 'assistant', content: 'Thank you for the information. Let me check the pricing for XYZ in New York.' },
];

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

      <Col xs={8} className="d-flex flex-column justify-content-start">
        {chatMessages.map((chat, index) => (
          <ChatItem content={chat.content} role={chat.role} key={index} />
        ))}
      </Col>

    </Row>
  </Container>
);

export default ITSearch;
