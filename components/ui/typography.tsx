import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        'text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        'text-xl md:text-2xl font-semibold tracking-tight leading-snug',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        'text-lg md:text-xl font-semibold leading-snug',
        className
      )}
    >
      {children}
    </h4>
  );
}

export function H5({ children, className }: TypographyProps) {
  return (
    <h5
      className={cn(
        'text-base md:text-lg font-semibold leading-normal',
        className
      )}
    >
      {children}
    </h5>
  );
}

export function H6({ children, className }: TypographyProps) {
  return (
    <h6
      className={cn(
        'text-sm md:text-base font-semibold leading-normal',
        className
      )}
    >
      {children}
    </h6>
  );
}

export function Body({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-base md:text-lg leading-relaxed text-gray-700',
        className
      )}
    >
      {children}
    </p>
  );
}

export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-sm md:text-base leading-relaxed text-gray-600',
        className
      )}
    >
      {children}
    </p>
  );
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light',
        className
      )}
    >
      {children}
    </p>
  );
}

export function Muted({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        'text-sm text-gray-500 leading-relaxed',
        className
      )}
    >
      {children}
    </p>
  );
}

// Content container for optimal reading width
export function ProseContainer({ children, className }: TypographyProps) {
  return (
    <div className={cn('max-w-3xl mx-auto', className)}>
      {children}
    </div>
  );
}

// Wide content container
export function ContentContainer({ children, className }: TypographyProps) {
  return (
    <div className={cn('max-w-4xl mx-auto', className)}>
      {children}
    </div>
  );
}
