'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Input } from './ui/input';
import { Button } from './ui/button';


const SearchInput: React.FC = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate search value (block number or block hash)
    if (!searchValue.trim()) {
      alert('Please enter a block number or block hash.');
      return;
    }

    try {
      await router.push(`/block/${searchValue}`);
      
    } catch (error) {
      console.error('Error navigating to block page:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="flex w-full max-w-sm items-center space-x-2 my-12" onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Block Number or Block Hash"
        value={searchValue}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchInput;
