import type { ReactElement } from "react";

export default function ProductCard() {


    return (
        <div className="h-100 w-90 bg-gray-100 rounded-2xl p-5">
            <div className="w-full h-60 bg-gray-200 animate-pulse rounded-xl"></div>

            <div className="h-4 bg-gray-200 animate-pulse rounded-full mt-10 w-50"></div>

            <div className="h-3 bg-gray-200 animate-pulse rounded-full mt-5 w-70"></div>
            <div className="h-3 bg-gray-200 animate-pulse rounded-full mt-2.5 w-full"></div>
        </div>
    );
}