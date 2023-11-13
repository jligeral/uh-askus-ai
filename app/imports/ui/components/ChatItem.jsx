import React from 'react';
import PropTypes from 'prop-types';

const ChatItem = ({ content, role }) => {
  const userBackgroundColor = 'silver';
  const assistantBackgroundColor = 'green';

  const containerStyle = {
    backgroundColor: role === 'user' ? userBackgroundColor : assistantBackgroundColor,
    color: 'white',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    overflowY: 'auto', // Enable vertical scrolling
    maxHeight: '100px', // Adjust the maximum height as needed
  };

  return (
    <div style={containerStyle}>
      {content}
    </div>
  );
};

// Require a document to be passed to this component.
ChatItem.propTypes = {
  content: PropTypes.string.isRequired,
  role: PropTypes.oneOf(['user', 'assistant']).isRequired,
};

export default ChatItem;
