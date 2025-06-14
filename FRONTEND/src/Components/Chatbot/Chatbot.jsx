import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I’m your Talent Corner assistant. What would you like to explore?" },
    {
      type: "bot",
      text: "Please choose a page:",
      options: ["Home", "About Us", "Services", "Management Team", "Contact", "FAQ"]
    }
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const chatBodyRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserInput = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    handleBotResponse(input.toLowerCase());
    setInput("");
  };

  const handleBotResponse = (msg) => {
    const lower = msg.toLowerCase();

    if (lower.includes("service")) {
      handleOptionClick("Services");
    } else if (lower.includes("about")) {
      handleOptionClick("About Us");
    } else if (lower.includes("management")) {
      handleOptionClick("Management Team");
    } else if (lower.includes("faq")) {
      handleOptionClick("FAQ");
    } else if (lower.includes("home")) {
      handleOptionClick("Home");
    } else if (
      lower.includes("contact") ||
      lower.includes("phone") ||
      lower.includes("email") ||
      lower.includes("address")
    ) {
      handleOptionClick("Contact");
    } else {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            "I didn’t understand that. You can say things like 'Go to services', 'Show me contact info', or click a button."
        }
      ]);
    }
  };

  const showContactDetails = () => {
    setMessages((prev) => [
      ...prev,
      { type: "bot", text: "📞 +91 22 4297 5100" },
      { type: "bot", text: "✉️ contact@talentcorner.in" },
      {
        type: "bot",
        text:
          "📍 708 & 709, Bhaveshwar Arcade Annex,\nLBS Marg, Opp Shreyas Cinema,\nGhatkopar West, Mumbai – 400086"
      }
    ]);
  };

  const handleOptionClick = (page) => {
    setMessages((prev) => [...prev, { type: "user", text: `Go to ${page}` }]);

    if (page === "Contact") {
      showContactDetails();
    } else {
      const routes = {
        "Home": "/",
        "About Us": "/mission",
        "Services": "/servicecard",
        "Management Team": "/management",
        "FAQ": "/faq"
      };

      const route = routes[page] || "/";
      navigate(route);

      setMessages((prev) => [
        ...prev,
        { type: "bot", text: `Navigating to ${page}...` }
      ]);
    }
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={toggleChat}>💬</button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Talent Corner Bot
            <button onClick={toggleChat} className="close-btn">✖</button>
          </div>

          <div className="chatbot-body" ref={chatBodyRef}>
            {messages.map((msg, i) =>
              msg.options ? (
                <div key={i}>
                  <p>{msg.text}</p>
                  <div className="chatbot-options">
                    {msg.options.map((opt) => (
                      <button key={opt} onClick={() => handleOptionClick(opt)}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div key={i} className={`chat-message ${msg.type}`}>
                  {msg.text}
                </div>
              )
            )}
          </div>

          <form onSubmit={handleUserInput} className="chatbot-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
