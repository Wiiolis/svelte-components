
import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '../lib/Button.svelte';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['ghost', 'link', 'normal'],
    },
    innerText: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'select'  },
      options: ['true', 'false'],
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    innerText: 'Click here',
    size: 'small',
    type: 'normal',
    disabled: 'false'
  },
};