import IconButton from "~/lib/components/IconButton";
import type { Route } from "./+types/index";
import Header from "~/lib/components/Header";
import ProductCard from "~/lib/components/ProductCard";
import PillButton from "~/lib/components/PillButton";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "~/services/ProductService";
import Loader from "~/lib/components/Loader";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Products" },
		{ name: "description", content: "View our entire catalog of products" },
	];
}

export default function Results() {
	const PRODUCT_CHUNK = 10;

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
	const [products, setProducts] = useState<any[]>([]);
	const [token, setToken]       = useState('');
	const [loading, setLoading]   = useState<boolean>(true);

    function getSearchQuery(): string | null {
        return searchParams.get('q') ?? null;
    }

	async function getProducts(): Promise<void> {
		setLoading(true);

        const query: string | null = getSearchQuery();

        if (!query) {
            navigate('/products');
        }

		const [p, t] = await fetchProducts(PRODUCT_CHUNK, query, token);

		setProducts(prev => [...prev, ...p]);
		setToken(t);

		setLoading(false);
	}

	useEffect(() => { getProducts(); }, []);

  	return (
		<>
			<Header />

			<main className="max-w-300 mx-auto mt-25 px-10 grid grid-cols-[auto_1fr] gap-10">
				<aside className="w-75 h-[80vh] rounded-2xl sticky top-[10vh] bg-gray-100">
					
				</aside>

				<section>
					<ul className="grid grid-flow-row gap-10 mb-10">
						{products.map((product => (
							<li>
								<ProductCard product={ product } />
							</li>
						)))}
					</ul>

					{ (loading === false && token !== null) && <PillButton onClick={ getProducts }>Load more</PillButton> }
					{ loading === true && <Loader /> }
				</section>
			</main>
		</>
	);
}
