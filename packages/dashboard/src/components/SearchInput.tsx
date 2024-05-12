'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from './ui/input'
import { Button } from './ui/button'

const SearchInput: React.FC = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate search value (block number)
    if (!searchValue.trim()) {
      alert('Please enter a block number.')
      return
    }

    try {
      await router.push(`/block/${searchValue}`)
    } catch (error) {
      console.error('Error navigating to block page:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <form className="my-12 flex w-3/4 items-center space-x-2" onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Block Number ..."
        value={searchValue}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  )
}

export default SearchInput
