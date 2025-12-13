import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchProps } from "@/types/homepage";

import { Search as SearchIcon } from "lucide-react";


export function Search({ placeholderValue }: SearchProps) {
  return (
    <InputGroup>
      <InputGroupInput placeholder={placeholderValue} />

      <InputGroupAddon>
        <SearchIcon className="w-4 h-4" />
      </InputGroupAddon>

      {/* <InputGroupAddon align="inline-end">
        12 results
      </InputGroupAddon> */}
    </InputGroup>
  );
}
