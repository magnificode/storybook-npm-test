import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  /**
   * The Button variant
   */
  variant?: "Primary" | "Secondary" | "Tertiary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const StyledButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  &.-primary {
    color: #333;
    background-color: #98f5c9;
  }

  &.-secondary {
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    color: #333;
  }

  &.-small {
    font-size: 0.75rem;
    padding: 0.625rem 1rem;
  }

  &.-medium {
    font-size: 0.875rem;
    padding: 0.625rem 1.25rem;
  }

  &.-large {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      className={[
        "storybook-button",
        `-${size}`,
        `-${variant?.toLowerCase()}`,
      ].join(" ")}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
