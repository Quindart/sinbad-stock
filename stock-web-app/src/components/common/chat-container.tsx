import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from '../ui/chat-message';
import { ChatInput } from '../ui/chat-input';
import ChatHeader from './chat-header';
import ChatSuggestion from './chat-sugesstion';
import LoadingMessage from '../ui/loading-message';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id?: string;
}

interface ChatContainerProps {
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isGenerating: boolean;
  onStop?: () => void;
}

export function ChatContainer({
  messages,
  input,
  onInputChange,
  onSubmit,
  isGenerating,
  onStop,
}: ChatContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  const handleQuickPrompt = (prompt: string) => {
    onInputChange(prompt);
  };
  return (
    <div className="mx-auto flex h-screen max-w-7xl">
      <div className="flex h-[calc(100vh-2rem)] w-full flex-col">
        <ChatHeader />
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          {messages.length === 0 ? (
            <ChatSuggestion handleQuickPrompt={handleQuickPrompt} />
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id || index}
                  role={message.role}
                  content={message.content}
                />
              ))}
              {isGenerating && <LoadingMessage />}
            </div>
          )}
        </ScrollArea>
        <ChatInput
          input={input}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          isGenerating={isGenerating}
          onStop={onStop}
        />
      </div>
    </div>
  );
}
