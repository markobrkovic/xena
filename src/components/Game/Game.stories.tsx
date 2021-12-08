import Game from './Game';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Game',
  component: Game,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const SingleGame = () => <Game />;
