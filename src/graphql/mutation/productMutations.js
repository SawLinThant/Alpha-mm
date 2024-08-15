import { gql } from "@apollo/client";


export const PRODUCT_SUBSCRIPTION = gql`
  subscription OnProductAdded {
    productAdded {
      id
      name
      category_id
      subcategory_id
      image_url
      product_specification
      product_description
      sub_img_one_url
      sub_img_two_url
      sub_img_three_url
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation createCategory(
    $category_name: String
  ){
    insert_category_one(
      object:{
         category_name: $category_name
      }
    ){
      id
      category_name  
    }
  }
`

export const CREATE_SUBCATEGORY = gql`
  mutation createSubCategory(
    $subcategory_name: String
    $category_id: uuid
  ){
    insert_subcategory_one(
      object:{
         subcategory_name: $subcategory_name
         category_id: $category_id
      }
    ){
      id
      subcategory_name
      category_id  
    }
  }
`

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String
    $model: String
    $price: Int
    $image_url: String
    $category_id: uuid
    $subcategory_id: uuid
    $product_specification: String
    $product_description: String
    $sub_img_one_url: String
    $sub_img_two_url: String
    $sub_img_three_url: String
  ) {
    insert_product_one(
      object: {
        name: $name
        model: $model
        price: $price
        image_url: $image_url
        category_id: $category_id
        subcategory_id: $subcategory_id
        product_specification: $product_specification
        product_description: $product_description
        sub_img_one_url: $sub_img_one_url
        sub_img_two_url: $sub_img_two_url
        sub_img_three_url: $sub_img_three_url
      }
    ) {
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
      sub_img_one_url
      sub_img_two_url
      sub_img_three_url
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
    $product_specification: String
    $product_description: String
    $sub_img_one_url: String
    $sub_img_two_url: String
    $sub_img_three_url: String
  ) {
    update_product_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        model: $model
        price: $price
        image_url: $image_url
        category_id: $category_id
        subcategory_id: $subcategory_id
        product_specification: $product_specification
        product_description: $product_description
        sub_img_one_url: $sub_img_one_url
        sub_img_two_url: $sub_img_two_url
        sub_img_three_url: $sub_img_three_url
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
      product_specification
      product_description
      sub_img_one_url
      sub_img_two_url
      sub_img_three_url
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: uuid!) {
    delete_product_by_pk(id: $id) {
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
      product_specification
      product_description
      sub_img_one_url
      sub_img_two_url
      sub_img_three_url
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation createMessage(
    $username: String
    $ph_number: numeric
    $message: String
  ) {
    insert_message_one(
      object: { username: $username, ph_number: $ph_number, message: $message }
    ){
      message_id
      username
      ph_number
      message  
    }
  }
`;
