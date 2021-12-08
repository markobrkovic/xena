import GameList from './GameList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/GameList',
  component: GameList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const GameListing = () => <GameList />;
