import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
}

const Textarea = ({ value, placeholder, ...props }: TextareaProps) => {
  return <textarea className="min-w-full text-base border-2 rounded-md p-2 bg-sithApprentice border-jediMaster text-jediMaster" {...props} placeholder={placeholder || 'Add text'} value={value} />;
};

export default Textarea;
