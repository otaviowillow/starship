import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLAnchorElement> {
  variant: 'heading1' | 'heading2' | 'heading3' | 'paragraph';
  children: React.ReactNode;
}

const Typography = ({ variant, children, className, ...props }: TypographyProps) => {
  const getTypographyElement = () => {
    switch (variant) {
      case 'heading1':
        return (
          <h1 className={`text-5xl m-2 font-bold dark:text-jediMaster ${className}`} {...props}>
            {children}
          </h1>
        );
      case 'heading2':
        return (
          <h2 className={`text-2xl m-2 font-bold dark:text-jediMaster ${className}`} {...props}>
            {children}
          </h2>
        );
      case 'heading3':
        return (
          <h3 className={`text-lg m-2 font-medium dark:text-jediMaster ${className}`} {...props}>
            {children}
          </h3>
        );
      case 'paragraph':
      default:
        return (
          <p className={`text-lg m-2 dark:text-jediMaster ${className}`} {...props}>
            {children}
          </p>
        );
    }
  };

  const typographyElement = getTypographyElement();

  return typographyElement;
};

export default Typography;
