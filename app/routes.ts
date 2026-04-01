import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("product/:slug", "routes/product/index.tsx"),
    route("products", "routes/products/index.tsx"),
    route("products/search", "routes/products/search/index.tsx"),
] satisfies RouteConfig;
