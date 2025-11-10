import * as React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className = '', children, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={[
        'rounded-2xl bg-white/[0.04] ring-1 ring-white/12',
        'supports-[backdrop-filter]:backdrop-blur-sm',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_-12px_rgba(0,0,0,0.6)]',
        'transition-all duration-300',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
