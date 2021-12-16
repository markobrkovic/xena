import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';

type OnSearchProps = {
  className?: string;
  onSearch: (title: string) => void;
};

function SearchInput({ className, onSearch }: OnSearchProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <Input
      className={className}
      onChange={setValue}
      placeholder="Search"
      color="text--contrast"
      size="medium"
      backgroundColor="background--contrast"
    />
  );
}

export default SearchInput;
