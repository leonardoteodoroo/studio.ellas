import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass' | 'luxury';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  // Base styles
  const baseStyles = "px-8 py-4 font-sans uppercase tracking-widest transition-all duration-500 ease-out";
  
  const variants = {
    primary: "text-xs font-bold rounded-xl bg-olive-deep text-taupe-warm hover:bg-sand-organic hover:text-white border border-olive-deep hover:border-sand-organic shadow-lg hover:shadow-sand-organic/30",
    
    outline: "text-xs font-bold rounded-xl bg-transparent text-olive-deep border border-olive-deep hover:bg-olive-deep hover:text-taupe-warm",
    
    glass: "text-xs font-bold rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:scale-[1.02]",
    
    // New Luxury Variant: Pill shape, Gold/Bronze/Nude filled, No border, Bold & Larger text, Glow effect
    luxury: "text-sm font-extrabold rounded-full bg-[#A18267] text-white border-none hover:bg-[#8F7259] hover:scale-105 shadow-[0_10px_40px_-10px_rgba(161,130,103,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(161,130,103,0.8)] brightness-100 hover:brightness-110"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;