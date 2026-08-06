export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="12" fill="#2A2721" />
      <text x="32" y="42" fontFamily="Georgia, 'Times New Roman', serif" fontSize="26" fontWeight="600" fill="#F7F3EC" textAnchor="middle">SV</text>
    </svg>
  );
}