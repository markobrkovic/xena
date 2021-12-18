import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Friend from './Friend';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Friend',
  component: Friend,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const FriendOnHomepage = () => (
  <MemoryRouter initialEntries={['/friend/1']}>
    <Routes>
      <Route
        path="/friend/:id"
        element={
          <Friend
            username="Leon"
            img="https://hackster.imgix.net/uploads/attachments/1317693/_Ek101jDIJo.blob?auto=compress%2Cformat&w=400&h=300&fit=min"
          />
        }
      />
    </Routes>
  </MemoryRouter>
);
