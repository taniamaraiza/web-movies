import React, { useEffect, useState } from 'react';
import { SearchField } from './styles';
import { SearchOutlined } from '@ant-design/icons';

interface SearchProps {
  onChangeSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onChangeSearch }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChangeSearch(search)
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [search])


  return(
    <SearchField 
      placeholder="Pesquise pelo nome" 
      prefix={<SearchOutlined />} 
      onChange={(data) => setSearch(data.target.value)} 
    />
  );
}

export default Search;
