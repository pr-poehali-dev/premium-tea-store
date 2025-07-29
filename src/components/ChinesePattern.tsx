import React from 'react';

interface ChinesePatternProps {
  variant?: 'dragon' | 'cloud' | 'lotus' | 'wave' | 'border';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ChinesePattern: React.FC<ChinesePatternProps> = ({ 
  variant = 'dragon', 
  size = 'md', 
  className = '' 
}) => {
  const patterns = {
    dragon: (
      <svg viewBox="0 0 200 60" className={`w-full h-full ${className}`} fill="currentColor">
        <path d="M10,30 Q30,10 50,30 Q70,50 90,30 Q110,10 130,30 Q150,50 170,30 Q190,10 200,30" 
              stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M15,25 Q35,15 55,25 Q75,35 95,25 Q115,15 135,25 Q155,35 175,25" 
              stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
        <circle cx="25" cy="22" r="2" opacity="0.8"/>
        <circle cx="65" cy="38" r="2" opacity="0.8"/>
        <circle cx="105" cy="22" r="2" opacity="0.8"/>
        <circle cx="145" cy="38" r="2" opacity="0.8"/>
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 100 40" className={`w-full h-full ${className}`} fill="currentColor">
        <path d="M10,25 Q20,15 30,25 Q40,35 50,25 Q60,15 70,25 Q80,35 90,25" 
              stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="20" cy="20" r="3" opacity="0.3"/>
        <circle cx="35" cy="30" r="2" opacity="0.3"/>
        <circle cx="50" cy="20" r="3" opacity="0.3"/>
        <circle cx="65" cy="30" r="2" opacity="0.3"/>
        <circle cx="80" cy="20" r="3" opacity="0.3"/>
      </svg>
    ),
    lotus: (
      <svg viewBox="0 0 80 80" className={`w-full h-full ${className}`} fill="currentColor">
        <path d="M40,20 Q50,30 40,40 Q30,30 40,20" opacity="0.6"/>
        <path d="M40,40 Q50,50 40,60 Q30,50 40,40" opacity="0.6"/>
        <path d="M20,40 Q30,30 40,40 Q30,50 20,40" opacity="0.6"/>
        <path d="M60,40 Q50,30 40,40 Q50,50 60,40" opacity="0.6"/>
        <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
        <circle cx="40" cy="40" r="4" opacity="0.8"/>
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 120 30" className={`w-full h-full ${className}`} fill="currentColor">
        <path d="M0,15 Q15,5 30,15 Q45,25 60,15 Q75,5 90,15 Q105,25 120,15" 
              stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
        <path d="M0,20 Q15,10 30,20 Q45,30 60,20 Q75,10 90,20 Q105,30 120,20" 
              stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
      </svg>
    ),
    border: (
      <svg viewBox="0 0 100 20" className={`w-full h-full ${className}`} fill="currentColor">
        <rect x="0" y="8" width="100" height="4" opacity="0.3"/>
        <pattern id="borderPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" opacity="0.6"/>
          <path d="M5,10 L15,10 M10,5 L10,15" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
        </pattern>
        <rect x="0" y="0" width="100" height="20" fill="url(#borderPattern)" opacity="0.5"/>
      </svg>
    )
  };

  const sizeClasses = {
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-16'
  };

  return (
    <div className={`${sizeClasses[size]} text-golden-primary ${className}`}>
      {patterns[variant]}
    </div>
  );
};

export default ChinesePattern;