import { cn } from '@/lib/utils';

function LogoBot({ className = '' }: { className?: string }) {
  return (
    <div>
      <img
        className={cn(className, 'size-10')}
        src="https://avatars.githubusercontent.com/u/191280300?s=400&u=429a6487ee2f4d263c7b8f3cb93cbebe44a09486&v=4"
        alt=""
      />
    </div>
  );
}

export default LogoBot;
