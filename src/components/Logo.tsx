
const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <rect width="40" height="40" rx="8" fill="url(#gradient)" />
        <path 
          d="M12 28L20 12L28 28H24L22 24H18L16 28H12ZM19 20L21 16L23 20H19Z" 
          fill="white" 
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D97706" />
            <stop offset="1" stopColor="#92400E" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-stone-700 bg-clip-text text-transparent">
          SculptureByWanner
        </span>
        <span className="text-xs text-stone-500 uppercase tracking-wider">
          Artiste Sculpteur
        </span>
      </div>
    </div>
  );
};

export default Logo;
