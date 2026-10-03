import React from 'react';

interface AxLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'adaptive';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const AxLogo: React.FC<AxLogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = false,
  size = 'md'
}) => {
  const isLight = variant === 'light';
  
  // Dimensions
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex items-center gap-3 ${heights[size]}`}>
        {/* Modernized AX Monogram Icon */}
        <svg
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto shrink-0 select-none"
          aria-hidden="true"
        >
          {/* Subtle architectural backdrop grid/guide accent */}
          <rect x="2" y="2" width="96" height="76" rx="4" fill="none" stroke={isLight ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"} strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Interlocking 'A' element */}
          <path
            d="M 32 10 L 14 70 L 26 70 L 30 54 L 46 54 L 50 70 L 62 70 L 44 10 Z M 34 38 L 38 23 L 42 38 Z"
            fill={isLight ? "#F8FAFC" : "#0F172A"}
          />
          
          {/* Slanted dynamic 'X' element with industrial blue/cyan highlight accent */}
          <path
            d="M 40 16 L 56 42 L 38 70 L 52 70 L 64 50 L 76 70 L 90 70 L 71 40 L 87 16 L 73 16 L 63 32 L 53 16 Z"
            fill={isLight ? "#38BDF8" : "#0284C7"}
          />
          
          {/* Precision joint shadow/overlap */}
          <path
            d="M 44 38 L 48 45 L 42 54 L 38 54 Z"
            fill={isLight ? "#0369A1" : "#075985"}
            opacity="0.85"
          />

          {/* Underline anchor line */}
          <rect x="14" y="73" width="76" height="3" rx="1.5" fill={isLight ? "#38BDF8" : "#0284C7"} />
        </svg>

        {/* Brand Text Lockup */}
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline tracking-tight">
            <span className={`font-display font-extrabold ${size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl'} ${isLight ? 'text-white' : 'text-slate-900'} tracking-tighter`}>
              AX
            </span>
            <span className={`font-display font-extrabold ml-1.5 ${size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl'} text-sky-400 tracking-normal`}>
              NOW!
            </span>
          </div>

          {showTagline && (
            <span className={`text-[9px] uppercase tracking-wider font-semibold mt-1 ${isLight ? 'text-slate-400' : 'text-slate-500'} whitespace-nowrap`}>
              Retail Construction & Facility Service
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
