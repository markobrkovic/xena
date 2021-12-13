import Game from './Game';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Game',
  component: Game,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const GameOnHomepage = () => (
  <Game
    key={1}
    name={'The Witcher'}
    screenshots={[
      {
        image_id:
          'https://hackster.imgix.net/uploads/attachments/1317693/_Ek101jDIJo.blob?auto=compress%2Cformat&w=400&h=300&fit=min',
      },
    ]}
    release_dates={[{ y: 2008 }]}
    summary={'Rick'}
    genres={[{ name: 'RPG' }]}
  />
);
