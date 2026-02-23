import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 👋 ওয়েলকাম মেসেজটি একটু বেশি ফ্রেন্ডলি করা হয়েছে
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi there! 👋 I am Brandbati AI. I can help you scale your business with Automation & Marketing. What are you working on today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [
            { 
              role: "system", 
              content: `You are 'Brandbati AI', a friendly and professional digital consultant (NOT a robot).
              
              YOUR GOAL: Have a natural conversation. Explain services clearly. Only push for a sale when the user is interested.

              OUR SERVICES:
              1. **AI Chatbot (Lifetime Deal):** A smart bot like you that handles clients 24/7.
              2. **Digital Growth Pack:** Complete social media management & ads.
              3. **Premium Branding:** Logo & Identity design.

              BEHAVIOR RULES (Human-Like):
              1. **Be Warm:** Use phrases like "That sounds great!", "I understand", "Let me explain".
              2. **Don't Spam:** DO NOT give the WhatsApp link in the very first message unless they specifically ask to buy.
              3. **Explain First:** If they ask "What is the Chatbot?", explain the benefits (e.g., "It saves time and captures leads automatically").
              
              WHEN TO GIVE LINK:
              - ONLY give the WhatsApp link if the user asks for **PRICE**, **COST**, or says **"I WANT THIS"** / **"HOW TO BUY"**.
              - Link Format: "Let's chat on WhatsApp to get this started: https://wa.me/8801784564410?text=I+am+interested+in+Brandbati+Services"`
            },
            ...messages.filter(m => m.role !== 'system'),
            userMessage
          ],
          model: "llama-3.3-70b-versatile",
          temperature: 0.7
        })
      });

      if (!response.ok) throw new Error('API Error');

      const data = await response.json();
      const botReply = data.choices[0]?.message?.content || "I can help with that! Could you elaborate?";

      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "My connection is a bit slow. Please try again in a moment!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-all flex items-center justify-center relative border-2 border-white/20"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[85vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[500px]"
          >
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 p-4 flex items-center gap-3 shadow-sm">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide">Brandbati AI</h3>
                <p className="text-teal-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-hide">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-teal-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}>
                    {/* লিংকগুলো ক্লিকেবল করার লজিক */}
                    {msg.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) => 
                      part.match(/^https?:\/\//) ? 
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold underline hover:text-blue-800 break-all">{part}</a> : 
                        part
                    )}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex gap-2 items-center bg-gray-50 px-3 py-2 rounded-full border border-gray-200 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
                />
                <button 
                  onClick={sendMessage} 
                  disabled={!input.trim() || loading}
                  className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="text-center mt-2 text-[10px] text-gray-400 font-medium">
                Powered by Brandbati
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
