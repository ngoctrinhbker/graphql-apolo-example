
const { gql } = require("apollo-server");
exports.typeDefs = gql`
  type Query {
    hello: String
    product(id: ID!): Product
    products(filter: ProductFilterInput): [Product!]!
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category
    addProduct(input: AddProductInput!): Product
    deleteCategory(id: ID!): Boolean
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    description: String!
    quantity: Int!
    onSale: Boolean!
    price: Float!
    categoryId: ID!
    category: Category
    review: [Review]
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }

  type Review {
    id: ID!
    title: String!
    date: String!
    comment: String!
    productId: ID!
    rating: Int!
}

input  ProductFilterInput {
  onSale: Boolean
  categoryId: ID
}

input  AddCategoryInput {
  name: String!
}

input  AddProductInput {
    name: String!
    image: String!
    description: String!
    quantity: Int!
    onSale: Boolean!
    price: Float!
    categoryId: ID!
}
`;