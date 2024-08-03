import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    product {
      id
      name
      model
      price
      image_url
      category_id
      subcategory_id
      category {
        id
        category_name
        subcategories {
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }
      product_specification
      product_description
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
        subcategories {
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }
      product_specification
      product_description
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
        subcategories {
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }
      product_specification
      product_description
    }
  }
`;

export const GET_PRODUCTS_BY_SUBCATEGORY = gql`
  query getProductsBySubCategory($subcategory: String!) {
    product(
      where: { subcategory: { subcategory_name: { _eq: $subcategory } } }
    ) {
      id
      name
      model
      price
      image_url
      category_id
      subcategory_id
      category {
        id
        category_name
        subcategories {
          id
          subcategory_name
        }
      }
      subcategory {
        id
        subcategory_name
      }
      product_specification
      product_description
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    category {
      id
      category_name
      subcategories {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORY_BY_NAME = gql`
  query getCategories($category_name: String!) {
    category(where: { category_name: { _eq: $category_name } }) {
      id
      category_name
      subcategories {
        id
        subcategory_name
        products {
          id
          name
          model
          price
          image_url
        }
        category {
          id
          category_name
        }
      }
    }
  }
`;

export const GET_CATEGORIES_WITHOUT_SUB = gql`
  query getCategories {
    category {
      id
      category_name
    }
  }
`;

export const GET_SUBCATEGORIES = gql`
  query getSubCategories {
    subcategory {
      id
      subcategory_name
    }
  }
`;

export const GET_SUBCATEGORY_BY_PRODUCT_ID = gql`
  query getSubCategory($id: uuid!) {
    subcategory(where: { products: { id: { _eq: $id } } }) {
      id
      subcategory_name
      products {
        id
        name
        model
        price
        image_url
      }
    }
  }
`;
