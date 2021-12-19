import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';

type OnSearchProps = {
  text?: string;
  className?: string;
  onSearch: (title: string) => void;
};

function SearchInput({
  text,
  className,
  onSearch,
}: OnSearchProps): JSX.Element {
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
      placeholder={text ? text : 'Search'}
      color="text"
      size="medium"
      backgroundColor="background"
    />
  );
}

export default SearchInput;
