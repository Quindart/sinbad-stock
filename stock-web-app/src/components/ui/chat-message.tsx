import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { User } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';
  return (
    <div
      className={cn(
        'flex max-w-lg gap-3 rounded-4xl p-2',
        isUser ? 'bg-muted/50 ml-auto' : 'bg-background',
      )}
    >
      <Avatar className="size-12 shrink-0">
        {isUser ? (
          <>
            <AvatarFallback className="bg-secondary text-primary-foreground">
              <User className="text-primary size-6" />
            </AvatarFallback>
          </>
        ) : (
          <>
            <AvatarFallback className="bg-secondary text-secondary-foreground">
              <img
                className="size-10"
                src="https://avatars.githubusercontent.com/u/191280300?s=400&u=429a6487ee2f4d263c7b8f3cb93cbebe44a09486&v=4"
                alt=""
              />
            </AvatarFallback>
          </>
        )}
      </Avatar>

      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="text-sm font-semibold">
          {isUser ? 'You' : 'Assistant'}
        </div>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
