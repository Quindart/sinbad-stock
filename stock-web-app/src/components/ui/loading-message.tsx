function LoadingMessage() {
  return (
    <div className="flex gap-3 p-4">
      <div className="flex gap-1">
        <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.3s]" />
        <div className="bg-primary h-2 w-2 animate-bounce rounded-full [animation-delay:-0.15s]" />
        <div className="bg-primary h-2 w-2 animate-bounce rounded-full" />
      </div>
    </div>
  );
}

export default LoadingMessage;
