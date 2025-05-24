// src/components/Chatbot.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import axios from 'axios'; // Import axios

// Placeholder for a chat icon (e.g., from a library or an SVG)
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-3.694 8.25-8.25 8.25S4.5 16.556 4.5 12 8.194 3.75 12.75 3.75S21 7.444 21 12z" />
  </svg>
);


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi there! I'm Kuldeep's assistant. Ask me anything about his profile!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSendMessage = async () => { // Make it async
    if (inputValue.trim() === '') return;
    const userMessageText = inputValue.trim();
    const userMessage = { sender: 'user', text: userMessageText };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');

    try {
      // API call to the backend
      const response = await axios.post('/api/chat', { message: userMessageText });
      
      if (response.data && response.data.reply) {
        const botResponse = { sender: 'bot', text: response.data.reply };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      } else {
        // Handle cases where response.data.reply might be missing
        const errorResponse = { sender: 'bot', text: 'Sorry, I received an unexpected response.' };
        setMessages(prevMessages => [...prevMessages, errorResponse]);
      }

    } catch (error) {
      console.error('Error sending message to backend:', error);
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      if (error.response && error.response.data && error.response.data.reply) {
        // If backend sends a specific error message in 'reply'
        errorMessage = error.response.data.reply;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      const errorResponse = { sender: 'bot', text: errorMessage };
      setMessages(prevMessages => [...prevMessages, errorResponse]);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Chat"
      >
        <ChatIcon />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-6 w-full max-w-md h-[70vh] max-h-[500px] bg-[#182030] shadow-xl rounded-lg flex flex-col z-40 overflow-hidden border border-gray-700" // Updated bg
          >
            {/* Header */}
            <div className="bg-[#101218] text-white p-4 flex justify-between items-center"> {/* Updated bg */}
              <h3 className="font-semibold text-lg">Kuldeep's AI Assistant</h3>
              <button onClick={toggleChat} className="text-gray-400 hover:text-white">&times;</button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-[#101218]/70"> {/* Updated bg */}
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none' // Updated user bg
                        : 'bg-gray-700 text-gray-200 rounded-bl-none' // Updated bot bg
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-[#101218] p-4 flex items-center"> {/* Updated bg */}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Kuldeep..."
                className="flex-grow p-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:ring-1 focus:ring-blue-500 focus:outline-none" // Updated input bg
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md" // Updated button bg
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
