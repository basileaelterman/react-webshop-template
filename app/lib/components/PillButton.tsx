import type { ReactElement } from "react";

export default function PillButton({ children }: { children: React.ReactNode }): ReactElement<HTMLButtonElement> {


    return (
        <button className="w-40 py-3 relative z-100
                           rounded-full mx-auto
                           flex justify-center items-center
                           group cursor-pointer"
        >
            <span className="absolute h-full w-full scale-z-90
                             bg-gray-200 rounded-full
                             scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-100 ease-out
                             group-active:bg-gray-300"
            ></span>
            
            <span className="z-100">{ children }</span>
        </button>
    );
}