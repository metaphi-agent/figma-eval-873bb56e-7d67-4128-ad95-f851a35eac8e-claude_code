import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
}

export default function Badge({
  className = '',
  variant = 'default',
  size = 'sm',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-bg-hover text-text-dim',
    primary: 'bg-primary/20 text-primary',
    success: 'bg-accent-green/20 text-accent-green',
    warning: 'bg-accent-yellow/20 text-accent-yellow',
    danger: 'bg-accent-red/20 text-accent-red',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-[--radius-sm] ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
