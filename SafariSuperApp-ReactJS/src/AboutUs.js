import React from 'react'
import './AboutUs.css';
import ChatBot from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'

function AboutUs() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatBot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}
export default AboutUs;
