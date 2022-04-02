import React, { ReactNode, MouseEventHandler } from 'react';
import { VariantButton } from '../../models/UI/Button';
import { StyledButton } from './styles';

interface ButtonProps {
  children: ReactNode;
  variant?: VariantButton;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick = undefined,
}: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
}
