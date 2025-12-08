'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  className = '', 
  variant = 'primary', 
  size = 'default', 
  children, 
  asChild = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: `${combinedClasses} ${child.props.className || ''}`,
      ...props
    } as any);
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
