import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect, ChangeEvent } from "react";
import debounce from "lodash.debounce";
import { useRef } from "react";
import { SearchBarProps } from "@/types";

const SearchBar = ({ onSearch, defaultValue }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const debouncedSearch = useRef(
    debounce((value: string) => {
      onSearch(value);
    }, 300)
  ).current;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex-1 md:grow-0 pr-2">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for movies..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
