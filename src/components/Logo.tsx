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
        <circle cx="20" cy="20" r="6" fill="white" />
        <rect x="12" y="10" width="16" height="8" rx="2" fill="white" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fef3c7" />
            <stop offset="1" stopColor="#fbcfe8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
          Photobooth Nantes
        </span>
        <span className="text-xs text-stone-500 uppercase tracking-wider">
          Location borne photo
        </span>
      </div>
    </div>
  );
};

export default Logo;
