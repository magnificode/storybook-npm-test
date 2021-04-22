import React from 'react';

import { StyledButton } from './StyledButton';

export interface ButtonProps {
  /**
   * The Button variant
   */
  variant?: 'Primary' | 'Secondary' | 'Tertiary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ children, variant, size, ...props }) => (
  <StyledButton
    type="button"
    className={['storybook-button', `-${size}`, `-${variant?.toLowerCase()}`].join(' ')}
    {...props}
  >
    {children}
  </StyledButton>
);
