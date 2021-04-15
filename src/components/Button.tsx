import React from 'react';
import styled from 'styled-components';

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

export const StyledButton = styled.button`
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	&.storybook-button--primary {
		color: white;
		background-color: #1ea7fd;
	}

	&.storybook-button--secondary {
		background-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
		color: #333;
	}

	&.storybook-button--small {
		font-size: 12px;
		padding: 10px 16px;
	}

	&.storybook-button--medium {
		font-size: 14px;
		padding: 11px 20px;
	}

	&.storybook-button--large {
		font-size: 16px;
		padding: 12px 24px;
	}
`

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'medium',
	...props
}) => {
	return (
		<StyledButton
			type="button"
			className={['storybook-button', `storybook-button--${size}`, `storybook-button--${variant?.toLowerCase()}`].join(' ')}
			{...props}
		>
			{children}
		</StyledButton>
	);
};
