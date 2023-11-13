import { Col, Container, Form, InputGroup, Row, Card } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import React from 'react';
import ChatItem from './ChatItem';
<<<<<<< Updated upstream
=======
import LoadingSpinner from './LoadingSpinner';
import DarkModeToggle from './DarkToggleMode';
>>>>>>> Stashed changes

const chatMessages = [
  { role: 'assistant', content: 'Hello! How can I assist you today?' },
  { role: 'user', content: 'I have a question about a product.' },
  { role: 'assistant', content: "Sure, I'd be happy to help. What's your question?" },
  { role: 'user', content: 'Can you provide more details about the pricing?' },
  { role: 'assistant', content: 'Of course. The pricing varies based on the product and your location. Please provide the product name and your location for accurate information.' },
  { role: 'user', content: "The product is XYZ and I'm located in New York." },
  { role: 'assistant', content: 'Thank you for the information. Let me check the pricing for XYZ in New York.' },
];

const sources = [
  { id: 1, title: 'Wifi UH Login', description: 'Connecting in the Classroom', href: '#' },
  { id: 2, title: 'DUO Required for Everyone', description: 'Downloading the DUO App', href: '#' },
  { id: 3, title: 'Financial Aid', description: 'Federal Work-Study', href: '#' },
  { id: 4, title: 'STAR', description: 'Registration Times', href: '#' },
  { id: 5, title: 'STAR', description: 'Parking Passes', href: '#' },
  { id: 6, title: 'Wifi UH Login', description: 'Not Connecting', href: '#' },
  { id: 7, title: 'Zoom', description: 'Zoom Room Time Limit', href: '#' },
  { id: 8, title: 'Google Maps', description: 'Administrator Access Needed', href: '#' },
  { id: 9, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 10, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 11, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 12, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 13, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 14, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 15, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
  { id: 16, title: 'Topic: Laulima', description: 'Multi-Factor Authentication (MFA)', href: '#' },
];

<<<<<<< Updated upstream
const ITSearch = () => (
  <Container id="landing-page" className="py-3 fluid">
    <Row>
      <Col />
      <Col xs={12}>
        <h2>Chat with a Virtual Assistant</h2>
        <InputGroup className="mb-3 search-bar-input-group">
          <Form.Control
            placeholder="Ask a question (Ex: How to use DUO?)"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="btn-group"><Search /></InputGroup.Text>
        </InputGroup>
      </Col>
      <Col />
    </Row>
    <Row className="flex-column scrollable-col">
      <Col className="flex-column scrollable-col" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <h5>Chat History</h5>
        {chatMessages.map((chat, index) => (
          <ChatItem content={chat.content} role={chat.role} key={index} />
        ))}
      </Col>
    </Row>
    <Row className="flex-column scrollable-col">
      <Col className="flex-column scrollable-col" style={{ maxHeight: '40vh', overflowY: 'auto' }}>
        <h5>Sources</h5>
        {sources.map((source, index) => (
          <Card key={index} className="mb-2">
            <Card.Header>{source.title}</Card.Header>
            <Card.Body>
              <a href={source.href} target="_blank" rel="noopener noreferrer">{source.description}</a>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
);
=======
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    // Set the isProcessing flag to true when starting the chatbot request
    setIsProcessing(true);
    // Add the user's message to the chatMessages array
    setChatMessages((prevChatMessages) => [
      ...prevChatMessages,
      { role: 'user', content: userInput },
    ]);

    // Send the user's message and session ID to the server using the getChatResponse method
    Meteor.call('getChatResponse', Meteor.userId(), userInput, (error, response) => {
      if (!error) {
        // Add the response from OpenAI to the chatMessages array
        setChatMessages((prevChatMessages) => [
          ...prevChatMessages,
          { role: 'assistant', content: response.chatResponse },
        ]);
      } else {
        // Handle any errors that occur during the API request
        console.error(error);
      }
      // Set isProcessing to false to indicate that the request is complete
      setIsProcessing(false);
    });

    // Clear the input field
    setUserInput('');
  };

  return (
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle">
        <h1>Virtual Help Desk</h1>
      </Row>
      <Row className="align-middle">
        <Col xs={4}>
          <InputGroup className="mb-3 search-bar-input-group">
            <Form.Control
              placeholder="Ask a question"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={userInput}
              onChange={handleUserInput}
            />
            <InputGroup.Text id="btn-group">
              <Button onClick={handleSendMessage}><Search /></Button>
            </InputGroup.Text>
          </InputGroup>
          <DarkModeToggle />
        </Col>
        <Col xs={8} className="d-flex flex-column justify-content-start">
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Col>
      </Row>
      {isProcessing && (
        <Row className="justify-content-md-center">
          <LoadingSpinner animation="border" />
        </Row>
      )}
    </Container>
  );
};
>>>>>>> Stashed changes

export default ITSearch;
