const { db: { categories: CATEGORIES, reviews: REVIEWS } } = require("../db");

exports.Product = {
    category: (parent, args, context) => {
        const categoryId = parent.categoryId;
        const category = CATEGORIES.find(({ id }) => id === categoryId)
        return category;
    },

    review: ((parent, args, context) => {
        const currentProductId = parent.id;
        const review = REVIEWS.filter(({ productId: id }) => id === currentProductId)
        return review;
    })
}