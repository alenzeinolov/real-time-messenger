import { useEffect, useRef, useState } from "react";
import Layout from "./components/Layout";
import Message from "./components/Message";
import MessageForm from "./components/MessageForm";

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
    <Layout>
      <MessageForm
        message={message}
        onChange={(e: any) => setMessage(e.target.value)}
        onSubmit={(e: any) => {
          e.preventDefault();
          if (!message) {
            return;
          }

          wsRef.current?.send(message);

          setMessage("");
        }}
      />
      {messages.length ? (
        messages.map((msg, idx) => <Message key={idx.toString()} text={msg} />)
      ) : (
        <div>No messages yet...</div>
      )}
    </Layout>
  );
}

export default App;
