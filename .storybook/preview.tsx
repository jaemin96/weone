import type { Preview } from '@storybook/react';
import '../src/scss/main.scss';

const previewStyle = {
  // padding: '20px',
  // backgroundColor: '#f0f0f0',
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={previewStyle}>
      <Story />
    </div>
  ),
];

export default preview;
