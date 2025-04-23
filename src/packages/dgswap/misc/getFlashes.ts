import { gqlParams, populatedGqlParams, queryGql } from "../utils/gql.js";

const getQueryFlashes = ({ count, skip, where }: gqlParams): populatedGqlParams => [
  `
  query getFlashes($count: Int!, $skip: Int!, $where: Flash_filter = {}) {
    flashes(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
      amount0
      amount0Paid
      amount1
      amount1Paid
      amountUSD
      id
      logIndex
      recipient
      sender
      timestamp
      transaction {
        id
      }
      pool {
        id
      }
    }
  }
  `,
  { count, skip, where }
];

export const getFlashes = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { flashes = [] } = await queryGql(...getQueryFlashes({ count, skip, where }));
  return flashes;
};
