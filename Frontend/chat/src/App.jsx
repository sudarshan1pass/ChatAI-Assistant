import React, { useState } from "react";

export default function ChatUI() {
  const [messages, setMessages] = useState([
    // { role: "ai", content: "data reply" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await res.json();

     
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: data.reply },
        ]);
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl flex flex-col h-[80vh]">
        {/* Header */}
        <div className="p-4 border-b text-xl font-semibold text-center">
          ChatAI Assistant
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                msg.role === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl w-20">
              ...
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}