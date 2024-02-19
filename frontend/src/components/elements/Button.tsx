import React from 'react';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({ children, onClick, className, href }: ButtonProps) {
  const buttonClass = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={buttonClass}>
        {children}
      </button>
    );
  }
}


