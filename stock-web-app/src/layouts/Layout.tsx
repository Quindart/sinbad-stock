import { AppSidebar } from '@/components/common/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="h-screen w-screen">{children}</div>
    </SidebarProvider>
  );
}
