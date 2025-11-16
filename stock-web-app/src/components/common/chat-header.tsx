import { useNavigate, useRouter } from '@tanstack/react-router';
import { Button } from '../ui/button';
import LogoBot from './logo';
import { useAuth } from '@/auth';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { SidebarTrigger } from '../ui/sidebar';
import LanguageDropdown from './language-dropdown';
function ChatHeader() {
  const router = useRouter();
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout().then(() => {
      router.invalidate().finally(() => {
        navigate({ to: '/' });
      });
    });
  };
  return (
    <>
      <AlertDialog>
        <div className="bg-card -b -slate-200 flex items-center justify-between gap-3 p-4">
          <div className="flex gap-2">
            <SidebarTrigger />
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <LogoBot className="rounded-circle" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Sinbad Stock</h1>
              <p className="text-muted-foreground text-sm">
                Powered by Quindart
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageDropdown />
            <AlertDialogTrigger asChild>
              <Button variant="outline">Logout</Button>
            </AlertDialogTrigger>
          </div>
        </div>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently logout your
              account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ChatHeader;
