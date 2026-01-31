import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', icon, error = false, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-text-dim">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2 bg-bg-main border rounded-[--radius-sm] text-text-main placeholder:text-text-dim
            focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
            transition-colors duration-150
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-accent-red' : 'border-bg-hover'}
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
