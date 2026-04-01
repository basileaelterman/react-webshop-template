import { useState } from 'react';

export default function Image({ src, alt = '' }: { src: string, alt: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="h-full aspect-square overflow-hidden rounded-lg">
            {!isLoaded && 
                <div className="h-full aspect-square bg-gray-200 animate-pulse rounded-lg" />
            }
            <img src={ src }
                 alt={ alt }
                 onLoad={ () => setIsLoaded(true) }
                 className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}