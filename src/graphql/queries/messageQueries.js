import { gql } from "@apollo/client";

export const GET_MESSAGE = gql`
     query getMessage{
        message{
          message_id
          username
          ph_number
          message
        }
     }
`