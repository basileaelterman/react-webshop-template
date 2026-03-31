import type { ReactElement } from "react";
import { v4 as uuidv4 } from 'uuid';

// Icons
import SearchIcon from '~/lib/icons/search.svg?react';

export default function SearchBar(): ReactElement<HTMLLabelElement> {
    const id: string = uuidv4();

    return (
        <label className="group relative bg-gray-100 rounded-full w-100 h-10.5 flex items-center p-2.5"
               htmlFor={ id }>
            <SearchIcon className="text-gray-500" />

            <input type="search" className="absolute inset-0 rounded-full pl-10 pr-5" />
        </label>
    );
}