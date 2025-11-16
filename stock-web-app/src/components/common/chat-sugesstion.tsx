import {
  ChartCandlestick,
  ChartNoAxesCombined,
  ChartPie,
  HandHeart,
  ScanSearch,
} from 'lucide-react';
import { Button } from '../ui/button';

const QUICK_PROMPTS = [
  {
    icon: <ChartCandlestick />,
    label: 'Phân tích thị trường',
    prompt: 'Phân tích thị trường',
  },
  {
    icon: <HandHeart />,
    label: 'Các mã chứng khoán yêu thích của tôi',
    prompt: 'Các mã chứng khoán yêu thích của tôi',
  },
  {
    icon: <ScanSearch />,
    label: 'Phân tích cơ bản',
    prompt: 'Phân tích cơ bản',
  },
  {
    icon: <ChartPie />,
    label: 'Vẽ chart',
    prompt: 'Vẽ chart',
  },
];

interface ChatSuggestionProps {
  handleQuickPrompt: (prompt: string) => void;
}

function ChatSuggestion({ handleQuickPrompt }: ChatSuggestionProps) {
  return (
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
        {QUICK_PROMPTS.map((item) => (
          <Button
            key={item.label}
            size={'xl'}
            onClick={() => handleQuickPrompt(item.prompt)}
            variant={'secondary'}
            className="hover:border-primary-foreground hover:shadow-primary-foreground rounded-4xl border border-white hover:shadow-xl"
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ChatSuggestion;
