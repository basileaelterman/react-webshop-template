import IconButton from "~/lib/components/IconButton";
import type { Route } from "./+types/index";
import Header from "~/lib/components/Header";
import ProductCard from "~/lib/components/ProductCard";
import PillButton from "~/lib/components/PillButton";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProduct } from "~/services/ProductService";
import Loader from "~/lib/components/Loader";
import { useNavigate } from "react-router";
import { useSearchParams, useParams } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Product" },
		{ name: "description", content: "Product" },
	];
}

export default function Product() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
	const [product, setProduct] = useState<any>([]);
	const [loading, setLoading]   = useState<boolean>(true);

	async function getProducts(): Promise<void> {
		setLoading(true);

        if (!slug) {
            navigate('/products');
        }

		const p = await fetchProduct(slug as string);

		setProduct(p);

		setLoading(false);
	}

	useEffect(() => { getProducts(); }, []);

  	return (
		<>
			<Header />

			<main className="max-w-300 mx-auto mt-25 px-10 grid grid-cols-[auto_1fr] gap-10">
                { loading === false &&  <p>{ product?.name }</p> }

                { loading === true && <Loader /> }
			</main>
		</>
	);
}
