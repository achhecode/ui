import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Search as SearchIcon } from "lucide-react";

export function Search() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />

      <InputGroupAddon>
        <SearchIcon className="w-4 h-4" />
      </InputGroupAddon>

      {/* <InputGroupAddon align="inline-end">
        12 results
      </InputGroupAddon> */}
    </InputGroup>
  );
}
