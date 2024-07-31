import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts{
    product{
      id
      name
      category
      model
      image_url
      price
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: uuid!) {
    product_by_pk(id: $id) {
      id
      name
      category
      model
      image_url
      price
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getProductsByCategory($category: String!) {
    product(where: { category: { _eq: $category } }) {
      id
      name
      category
      model
      image_url
      price
    }
  }
`;