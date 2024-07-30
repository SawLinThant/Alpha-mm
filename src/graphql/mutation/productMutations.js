import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String
    $category: String
    $model: String
    $price: Int
    $image_url: String
  ){
     insert_product_one (
        object: {
          name: $name
          category:  $category
          model: $model
          price: $price
          image_url: $image_url
        }
     ){
       name
       category
       model
       price
       image_url   
     }
  }
`