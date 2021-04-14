import React from 'react';
import './button.css';

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
export const Button: React.FC<ButtonProps> = ({
	children,
	size = 'medium',
	...props
}) => {
	return (
		<button
			type="button"
			className={['storybook-button', `storybook-button--${size}`].join(' ')}
			{...props}
		>
			{children}
		</button>
	);
};
