import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String
    $model: String
    $price: Int
    $image_url: String
    $category_id: uuid
    $subcategory_id: uuid
  ){
     insert_product_one (
        object: {
          name: $name
          model: $model
          price: $price
          image_url: $image_url
          category_id: $category_id
          subcategory_id: $subcategory_id
        }
     ){
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

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: uuid!
    $name: String
    $model: String
    $price: Int
    $image_url: String
    $category_id: uuid
    $subcategory_id: uuid
  ) {
    update_product_by_pk(
      pk_columns: { id: $id },
      _set: {
        name: $name,
        model: $model,
        price: $price,
        image_url: $image_url,
        category_id: $category_id,
        subcategory_id: $subcategory_id
      }
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
      }
      subcategory {
        id
        subcategory_name
      }
    }
  }
`;