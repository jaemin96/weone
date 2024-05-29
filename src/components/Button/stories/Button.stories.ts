import { Button } from './../Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size:"medium",
    children: "click",
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: "click",
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: "click",
  },
};