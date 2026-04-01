import type { ReactElement } from "react";

export default function IconButton({ children }: { children: React.ReactNode }): ReactElement<HTMLButtonElement> {
    return (
        <button className="w-10.5 h-10.5 relative z-100
                           rounded-full
                           flex justify-center items-center
                           group cursor-pointer"
        >
            <span className="absolute h-full w-full scale-z-90
                             bg-gray-100 rounded-full
                             scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-150 ease
                             group-active:bg-gray-200"
            ></span>
            
            <span className="z-100">{ children }</span>
        </button>
    );
}
