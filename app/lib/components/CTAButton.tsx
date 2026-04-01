import type { ReactElement } from "react";

export default function CTAButton({ children }: { children: React.ReactNode }): ReactElement<HTMLButtonElement> {


    return (
        <button className="w-12 h-12 p-2.5 text-white bg-brand-500
                           rounded-lg
                           flex justify-center items-center
                           cursor-pointer"
        >
            { children }
        </button>
    );
}