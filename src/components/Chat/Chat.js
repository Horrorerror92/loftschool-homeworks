import React from 'react';
import Message from '../Message/Message';
import './Chat.css';


export class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  }

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    })
  }
  
  sendMessageOnEnter = e => {
    const { messages, messageInput } = this.state;
    if (e.key === 'Enter') {
      this.setState({
        messages: [...messages, { text: messageInput }],
        messageInput: ''
      });
    }
  };

  render () {
    const {messages,  messageInput} = this.state;

    return (
      <div className = "chat">
        <div className = "message-list">
          <div className = "messages">
            {messages.map((message, id ) => (
                <Message key={id} text={message.text} />
              ))}
          </div>
        </div>
        <input
        className="input-message"
        value = {messageInput} 
        onChange = { this.changeInputMessage } 
        onKeyPress = { this.sendMessageOnEnter }     
        />
      </div>
      
      );
    }
  }

export default Chat;