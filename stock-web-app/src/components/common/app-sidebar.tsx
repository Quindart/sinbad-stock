/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  Search,
  Settings,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  const [selectedModel, setSelectedModel] = useState('GPT-4.0');

  const models = [
    { name: 'GPT-4.0', icon: '/assets/icons/chatgpt-icon.png' },
    { name: 'Gemini 2.0', icon: '/assets/icons/gemini-icon.png' },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    {selectedModel === 'GPT-4.0' ? (
                      <img
                        className="size-5"
                        alt="gpt-icon-quindart"
                        src="/assets/icons/chatgpt-icon.png"
                      />
                    ) : (
                      <img
                        className="size-5"
                        alt="gemini-icon-quindart"
                        src="/assets/icons/gemini-icon.png"
                      />
                    )}
                    <span className="text-[16px] font-medium text-slate-600">
                      {selectedModel}
                    </span>
                  </div>
                  <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {models.map((model) => (
                  <DropdownMenuItem
                    key={model.name}
                    onClick={() => setSelectedModel(model.name)}
                    className={cn(
                      'flex cursor-pointer items-center gap-2',
                      selectedModel === model.name
                        ? 'bg-accent text-accent-foreground'
                        : '',
                    )}
                  >
                    <img
                      className="size-5"
                      alt="gpt-icon-quindart"
                      src={model.icon}
                    />

                    <span className="text-[16px] font-medium text-slate-600">
                      {model.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
