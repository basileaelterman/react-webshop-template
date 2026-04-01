import type { ReactElement, FormEvent } from "react";
import { useEffect } from "react";

// Icons
import SearchIcon from '~/lib/icons/search.svg?react';

export default function SearchBar(): ReactElement<HTMLFormElement> {
    const id: string = "search-bar";

    // Listen for CMD+K to focus input
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent): void {
            if (event.metaKey && event.key === 'k') {
                event.preventDefault();

                const searchBar = document.getElementById(id);
                searchBar?.focus();
            }
        }

        document?.addEventListener('keydown', handleKeyDown);

        return () => {
            document?.removeEventListener('keydown', handleKeyDown);
        };
    }, [id]);

    return (
        <form action="/products/search" method="GET">
            <label className="hidden md:flex group relative bg-gray-100 rounded-full w-100 h-10.5 items-center p-2.5"
                htmlFor={ id }>
                <SearchIcon className="text-gray-500" />

                <input id={ id } type="search" className="absolute inset-0 rounded-full pl-10 pr-5" name="q" />
            </label>
        </form>
    );
}