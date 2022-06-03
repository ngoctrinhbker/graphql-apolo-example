const { db: { products: PRODUCTS, categories: CATEGORIES } } = require("../db");

exports.Category = {
    products: (parent, args, context) => {
        const categoryId = parent.id;
        const products = PRODUCTS.filter(({ categoryId: id }) => id === categoryId)
        return products;
    }
}