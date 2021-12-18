import '../src/global.css';
const customViewports = {
  kindleFire2: {
    name: 'VideoFormat',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
};

export const parameters = {
  layout: 'fullscreen',
  viewport: { viewports: customViewports },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
