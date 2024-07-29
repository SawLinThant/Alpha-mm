import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts{
    product{
      name
      category
      description
      image_url
      price
    }
  }
`;