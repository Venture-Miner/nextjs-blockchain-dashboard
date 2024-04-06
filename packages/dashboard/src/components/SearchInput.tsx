import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchInput: React.FC = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 my-12">
      <Input type="text" placeholder="Block Number"/>
      <Button type="submit">Search</Button>
    </div>
  )
}
export default SearchInput;
