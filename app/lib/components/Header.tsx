import type { ReactElement } from "react";

// Components
import IconButton from "./IconButton";

// Icons
import UserIcon   from '~/lib/icons/user.svg?react';
import ShoppingBagIcon from '~/lib/icons/shopping-bag.svg?react';
import SearchBar from "./SearchBar";

export default function Header(): ReactElement<HTMLHeadElement> {
    return (
        <header className="flex justify-between px-10 py-5 items-center max-w-300 mx-auto">
            <a className="text-2xl font-medium"
               href="/products"
               target="_self"
            >
                My webshop
            </a>

            <SearchBar />

            <section className="grid grid-flow-col">
                <IconButton>
                    <UserIcon />
                </IconButton>
                <IconButton>
                    <ShoppingBagIcon />
                </IconButton>
            </section>
        </header>
    );
}