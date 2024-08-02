import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts{
    product{
      id
      name
      category
      model
      price
      image_url  
      category_id
      subcategory_id
      category {
        id
        category_name
        subcategories{
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }

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
      price
      image_url  
      category_id
      subcategory_id
      category {
        id
        category_name
        subcategories{
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }

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
      price
      image_url  
      category_id
      subcategory_id
      category {
        id
        category_name
        subcategories{
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }

    }
  }
`;

export const GET_PRODUCTS_BY_SUBCATEGORY = gql`
  query getProductsBySubCategory($subcategory: String!) {
    product(where: { subcategory: { _eq: $subcategory } }) {
      id
      name
      category
      subcategory
      model
      image_url
      price
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories{
    category{
      id
      category_name
      subcategories {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORIES_WITHOUT_SUB = gql`
  query getCategories{
    category{
      id
      category_name
    }
  }
`;

export const GET_SUBCATEGORIES = gql`
  query getSubCategories{
    subcategory{
      id
      subcategory_name
    }
  }
`;