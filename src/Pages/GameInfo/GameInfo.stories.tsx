import GameInfo from './GameInfo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/GameInfo',
  component: GameInfo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const GameInfoPage = () => <GameInfo />;
