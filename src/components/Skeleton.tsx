export function Skeleton({ className = "" }: { className?: string }) {
    return <div className={`animate-pulse bg-madeira/20 rounded ${className}`} />;
  }