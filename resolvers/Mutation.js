const { slice } = require("lodash");
const { v4: uuid } = require("uuid")
const { db: { categories: CATEGORIES, products: PRODUCTS } } = require("../db");

exports.Mutation = {
	addCategory: (parent, args, context) => {
		const newCategory = {
			id: uuid(), name: args.input.name
		}
		CATEGORIES.push(newCategory)

		return newCategory
	},

	addProduct: (parent, args, context) => {
		const { name, categoryId, quantity, onSale, description, image, price } = args.input
		const newProduct = {
			id: uuid(),
			name, categoryId, quantity, onSale, description, image, price
		}
		PRODUCTS.push(newProduct)

		return newProduct
	},
	deleteCategory: (parent, args, context) => {
		const deletedCategoryIndex = CATEGORIES.indexOf(args.id)
		console.log({ CATEGORIES })
		CATEGORIES.splice(deletedCategoryIndex, 1)
		console.log("========after", { CATEGORIES })
		return true
	},


}