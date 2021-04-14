import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		children: {
			description: 'The button label',
			control: 'text',
			defaultValue: 'Button',
		},
		variant: {
			description: 'Button Type',
			control: 'radio',
			defaultValue: 'Primary',
			options: ['Primary', 'Secondary', 'Tertiary']
		},
		size: {
			description: 'Button Size',
			control: 'radio',
			defaultValue: 'medium',
			options: ['small', 'medium', 'large']
		}
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'Secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	variant: 'Tertiary'
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
};
