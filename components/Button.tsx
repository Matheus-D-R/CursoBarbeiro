import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg rounded-md py-4 px-6 md:py-5 md:px-10 text-lg md:text-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-400 hover:to-amber-500 shadow-yellow-500/20",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
