const { db: { products: PRODUCTS, categories: CATEGORIES } } = require("../db");
const { unionBy, isEmpty } = require("lodash")

exports.Query = {
    hello: () => "World123345",

    product: (parent, args, context) => {
        const productId = args.id;
        const product = PRODUCTS.find(({ id }) => id === productId)
        return product;
    },
    products: (parent, args, context) => {
        const { filter } = args

        if (isEmpty(filter)) return PRODUCTS;

        let filteredProducts = PRODUCTS
        let filteredProductsByOnSale = []
        let filteredProductsByCategory = []

        if (filter.onSale != undefined) {
            filteredProductsByOnSale = PRODUCTS.filter(({ onSale }) => onSale === filter.onSale)
        }

        if (filter.categoryId) {
            filteredProductsByCategory = PRODUCTS.filter(({ categoryId }) => categoryId === filter.categoryId)
        }

        return unionBy([...filteredProductsByOnSale, ...filteredProductsByCategory, ...filteredProductsByCategory], "id")

    },

    categories: () => CATEGORIES,
    category: (parent, args, context) => {
        const categoryId = args.id;
        const category = CATEGORIES.find(({ id }) => id === categoryId)
        return category;
    },
}