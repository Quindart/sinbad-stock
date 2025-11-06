import type { FormEvent, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Square } from 'lucide-react';

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  isGenerating: boolean;
  onStop?: () => void;
}

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  isGenerating,
  onStop,
}: ChatInputProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-4 flex items-center gap-2">
      <Input
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        disabled={isGenerating}
        className="h-14 flex-1 rounded-4xl border border-slate-400"
      />
      {isGenerating ? (
        <Button
          type="button"
          onClick={onStop}
          variant="destructive"
          className="rounded-circle!"
          size="xl"
        >
          <Square className="size-6" />
        </Button>
      ) : (
        <Button
          size="xl"
          type="submit"
          className="rounded-[50%]! shadow-2xl!"
          disabled={!input.trim()}
        >
          <Send className="size-6" />
        </Button>
      )}
    </form>
  );
}
