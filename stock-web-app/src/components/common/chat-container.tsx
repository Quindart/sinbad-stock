import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ChartCandlestick,
  ChartNoAxesCombined,
  ChartPie,
  HandHeart,
  ScanSearch,
} from 'lucide-react';
import { ChatMessage } from '../ui/chat-message';
import { ChatInput } from '../ui/chat-input';
import { SidebarTrigger } from '../ui/sidebar';
import LogoBot from './logo';
import { Button } from '../ui/button';

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
    console.log('🚀 ~ handleQuickPrompt ~ prompt:', prompt);
    onInputChange('Cac ma chung khoan');
  };
  return (
    <div className="mx-auto flex h-screen max-w-7xl">
      <div className="flex h-[calc(100vh-2rem)] w-full flex-col">
        {/* Header */}
        <div className="bg-card -b -slate-200 flex items-center gap-3 p-4">
          <SidebarTrigger>q2e</SidebarTrigger>
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
            <LogoBot className="rounded-circle" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Sinbad Stock</h1>
            <p className="text-muted-foreground text-sm">Powered by Quindart</p>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-6 text-center">
              <div className="bg-primary/10 flex size-20 items-center justify-center rounded-full">
                <ChartNoAxesCombined className="text-primary size-12" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Start a conversation</h2>
                <p className="text-muted-foreground max-w-sm text-sm">
                  Ask me anything! I'm here to help you with your questions.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button
                  size={'xl'}
                  onClick={() => handleQuickPrompt('Phân tích thị trường')}
                  variant={'secondary'}
                  className="hover:border-primary-foreground hover:shadow-primary-foreground rounded-4xl border border-white hover:shadow-xl"
                >
                  <ChartCandlestick />
                  Phân tích thị trường
                </Button>

                <Button
                  size={'xl'}
                  onClick={() =>
                    handleQuickPrompt('Các mã chứng khoán yêu thích của tôi')
                  }
                  variant={'secondary'}
                  className="hover:border-primary-foreground hover:shadow-primary-foreground rounded-4xl border border-white hover:shadow-xl"
                >
                  <HandHeart />
                  Các mã chứng khoán yêu thích của tôi
                </Button>

                <Button
                  size={'xl'}
                  onClick={() => handleQuickPrompt('Phân tích cơ bản')}
                  variant={'secondary'}
                  className="hover:border-primary-foreground hover:shadow-primary-foreground rounded-4xl border border-white hover:shadow-xl"
                >
                  <ScanSearch />
                  Phân tích cơ bản
                </Button>

                <Button
                  size={'xl'}
                  onClick={() => handleQuickPrompt('Vẽ chart')}
                  variant={'secondary'}
                  className="hover:border-primary-foreground hover:shadow-primary-foreground rounded-4xl border border-white hover:shadow-xl"
                >
                  <ChartPie /> Vẽ chart
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id || index}
                  role={message.role}
                  content={message.content}
                />
              ))}

              {isGenerating && (
                <div className="flex gap-3 p-4">
                  <div className="flex gap-1">
                    <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]" />
                    <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]" />
                    <div className="bg-primary h-2 w-2 animate-bounce rounded-full" />
                  </div>
                </div>
              )}
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
