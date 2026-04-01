import type { ReactElement } from "react";
import CTAButton from "./CTAButton";

interface Product {
    name: string,
    slug: string,
    price: number,
}

export default function ProductCard({ product }: { product: Product }) {
    const name: string  = product.name;
    const slug: string  = product.slug;
    const price: number = product.price;
    const brand: string = 'brandname';

    const productPage = "/product/" + slug;

    return (
        <a className="w-full h-50 bg-gray-100 rounded-2xl p-5 grid grid-cols-[auto_1fr] gap-5"
           href={ productPage }
        >
            <div className="h-full bg-gray-200 aspect-square animate-pulse rounded-xl mb-5"></div>

            <div className="w-full">
                <p className="text-xs">{ brand.toUpperCase() }</p>
                <dl className="w-full grid grid-cols-[1fr_auto] items-center">
                    <dt className="text-xl font-medium">{ name }</dt>
                    <dd className="font-medium">€{ price.toFixed(2) }</dd>
                </dl>
            </div>
        </a>
    );
}
