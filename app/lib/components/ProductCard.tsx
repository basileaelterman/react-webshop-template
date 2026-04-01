import type { ReactElement } from "react";

// Components
import CTAButton from "./CTAButton";
import Image from '~/lib/components/Image';

// Icons
import PlusIcon from "~/lib/icons/plus.svg?react";

interface Product {
    name: string,
    slug: string,
    price: number,
}

export default function ProductCard({ product }: { product: Product }): ReactElement {
    const name: string  = product.name;
    const slug: string  = product.slug;
    const price: number = product.price;
    const brand: string = 'brandname';
    const facts: string[] = [
        'non-stick',
        'stainless steel',
        '10-inch',
    ];

    const productPage = "/product/" + slug;

    return (
        <article className="w-full h-50 bg-gray-100 rounded-2xl p-5 grid grid-cols-[auto_1fr] gap-5 cursor-default">
            <Image src="https://cdn.wallpapersafari.com/30/59/YHm7iX.jpg" alt="" />

            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full">
                    <p className="text-xs">{ brand.toUpperCase() }</p>
                    <dl className="w-full grid grid-cols-[1fr_auto] items-center">
                        <dt className="text-xl font-medium">
                            <a href={ productPage }>{ name }</a>
                        </dt>
                        <dd className="font-medium">€{ price.toFixed(2) }</dd>
                    </dl>
                    <ul className="mt-1 text-xs text-gray-600 grid grid-flow-col w-fit">
                        {facts.map(fact => (
                            <li className="after:content-['•'] after:mx-1 last:after:content-none">{ fact }</li>
                        ))}
                    </ul>
                </div>

                <div className="grid justify-end items-end w-full">
                    <CTAButton>
                        <PlusIcon />
                    </CTAButton>
                </div>
            </div>
        </article>
    );
}
