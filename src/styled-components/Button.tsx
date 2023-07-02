import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button = ({ variant, children, disabled, className, ...props }: ButtonProps) => {
  const getButtonElement = () => {
    switch (variant) {
      case 'secondary':
        return (
          <button className={`text-xs p-3 rounded-2xl bg-sithApprentice text-jediMaster ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`} {...props} disabled={disabled}>
            {children}
          </button>
        );
      case 'primary':
      default:
        return (
          <button className={`text-2xl p-3 rounded-2xl bg-sithApprentice text-darkSaber ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}}`} {...props} disabled={disabled}>
            {children}
          </button>
        );
    }
  };

  const ButtonElement = getButtonElement();

  return ButtonElement;
};

export default Button;
