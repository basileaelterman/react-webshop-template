import IconButton from "~/lib/components/IconButton";
import type { Route } from "./+types/index";
import Header from "~/lib/components/Header";
import ProductCard from "~/lib/components/ProductCard";
import PillButton from "~/lib/components/PillButton";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "~/services/ProductService";
import Loader from "~/lib/components/Loader";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Products" },
		{ name: "description", content: "View our entire catalog of products" },
	];
}

export default function Products() {
	return (
		<>
			<Header />

			<p>Products</p>
		</>
	);
}
