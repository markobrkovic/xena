import SearchInput from './SearchInput';
import React from 'react';

export default {
  component: SearchInput,
  title: 'Components/SearchInput',
};

export const Default = () => <SearchInput onSearch={() => alert('daa')} />;
