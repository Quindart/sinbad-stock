import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

const getCurrentServerTime = createServerFn({
  method: 'GET',
}).handler(async () => await new Date().toISOString());

export const Route = createFileRoute('/demo/start/server-funcs')({
  component: Home,
  loader: async () => await getCurrentServerTime(),
});

function Home() {
  const originalTime = Route.useLoaderData();
  const [time, setTime] = useState(originalTime);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-800 to-black p-4 text-white"
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 20% 60%, #23272a 0%, #18181b 50%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-2xl rounded-xl border-8 border-black/10 bg-black/50 p-8 shadow-xl backdrop-blur-md">
        <h1 className="mb-4 text-2xl">Start Server Functions - Server Time</h1>
        <div className="flex flex-col gap-2">
          <div className="text-xl">Starting Time: {originalTime}</div>
          <div className="text-xl">Current Time: {time}</div>
          <button
            className="rounded-lg bg-blue-500 px-4 py-3 font-bold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-500/50"
            onClick={async () => setTime(await getCurrentServerTime())}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
