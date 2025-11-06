import { useState } from 'react';
import { ChatContainer } from './components/common/chat-container';
import Layout from './layouts/Layout';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    try {
      // TODO: Thay bằng API call thực tế
      // Ví dụ với OpenAI:
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [...messages, userMessage].map(({ role, content }) => ({
              role,
              content,
            })),
            stream: false,
          }),
        },
      );

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
        id: (Date.now() + 1).toString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        id: (Date.now() + 1).toString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStop = () => {
    setIsGenerating(false);
  };
  return (
    <Layout
      children={
        <ChatContainer
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSubmit={handleSubmit}
          isGenerating={isGenerating}
          onStop={handleStop}
        />
      }
    />
  );
}

export default App;
