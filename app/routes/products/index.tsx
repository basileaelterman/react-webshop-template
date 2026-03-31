import IconButton from "~/lib/components/IconButton";
import type { Route } from "./+types/home";
import Header from "~/lib/components/Header";
import ProductCard from "~/lib/components/ProductCard";
import PillButton from "~/lib/components/PillButton";

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

      <main className="max-w-300 mx-auto mt-25">
        <ul className="grid grid-flow-row grid-cols-[1fr_1fr_auto] gap-y-15 mb-10">
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
          <li><ProductCard /></li>
        </ul>

        <PillButton>Load more</PillButton>
      </main>
    </>
  );
}
