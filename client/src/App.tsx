import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const wsRef = useRef<WebSocket>();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:5000");
    wsRef.current.addEventListener("message", (e) => {
      setMessages((state) => [...state, e.data]);
    });

    return () => wsRef.current!.close();
  }, []);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!message) {
            return;
          }

          wsRef.current?.send(message);

          setMessage("");
        }}
      >
        <input
          placeholder="Say something..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
      {messages.length ? (
        messages.map((msg, idx) => <div key={idx}>{msg}</div>)
      ) : (
        <div>No messages yet...</div>
      )}
    </div>
  );
}

export default App;
