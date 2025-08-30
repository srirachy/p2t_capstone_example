import Product, { PRODUCT_CATEGORIES } from '../models/Product.js';

export const getProducts = async (_req, res) => {
    try {
        const products = [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 },
            { id: 3, name: 'Product 3', price: 300 }
        ];
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createProduct = async () => {};
