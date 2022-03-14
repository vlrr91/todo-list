import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick = undefined
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
}
