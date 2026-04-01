import { HTTP } from "~/helpers/http";

export async function fetchProducts(quantity: number, query: string | null = null, token: string | null = null): Promise<any[]> {
    const url = 'http://localhost:5173/productsapi';

    if (!url) {
        throw new Error('No API found in environment file', { 
            cause: HTTP.INTERNAL_SERVER_ERROR, 
        });
    }

    // Fetch the products
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: quantity,
                query: query,
                token: token,
            }),
        });

        console.log(response);

        if (!response.ok) {
            throw new Error('Could not connect to server');
        }

        const data = await response.json();

        return [
            data.products,
            data.token,
        ];
    } catch (error) {
        console.error(error);
        return [[], ''];
    }
}

export async function fetchProduct(slug: string): Promise<any> {
    const url = 'http://localhost:5173/productapi';

    if (!url) {
        throw new Error('No API found in environment file', {
            cause: HTTP.INTERNAL_SERVER_ERROR,
        });
    }

    // Fetch the product
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                slug: slug,
            }),
        });

        if (!response.ok) {
            throw new Error('Something fucking happend again smh');
        }

        const product = await response.json();

        return product;
    } catch (error) {
        console.error(error);
        return null;
    }
}
