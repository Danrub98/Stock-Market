import { gql } from '@apollo/client';
export const QUERY_SAVE = gql`
  {
    user {
      _id
      username
      email
      orders {
        owner_id
        _id
        unit_price
        total_price
        quantity
        stocks {
          _id
          ticker
          name
          price
          date
          icon
        }
      }
    }
  }
`;