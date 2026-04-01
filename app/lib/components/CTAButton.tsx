import type { ReactElement } from "react";

export default function CTAButton({ children }: { children: React.ReactNode }): ReactElement<HTMLButtonElement> {


    return (
        <button className="w-full py-2.5 px-7.5 text-white bg-blue-500
                           rounded-full mx-auto
                           flex justify-center items-center
                           cursor-pointer"
        >
            { children }
        </button>
    );
}