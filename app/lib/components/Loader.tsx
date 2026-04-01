import type { ReactElement } from "react";

// Icons
import LoaderIcon from '~/lib/icons/loader-circle.svg?react';

export default function Loader(): ReactElement<SVGElement> {
    return (
        <LoaderIcon className="animate-spin h-25 w-25 text-gray-300 mx-auto" />
    );
}