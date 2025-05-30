import { gqlParams, populatedGqlParams, queryGql } from "../utils/gql.js";

const getQueryCollects = ({ count, skip, where }: gqlParams): populatedGqlParams => [
  `
  query getCollects($count: Int!, $skip: Int!, $where: Collect_filter = {}) {
    collects(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
      id
      owner
      amount0
      amount1
      amountUSD
      logIndex
      tickLower
      tickUpper
      timestamp
      pool {
        id
      }
      transaction {
        id
      }
    }
  }
  `,
  { count, skip, where }
];

export const getCollects = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { collects = [] } = await queryGql(...getQueryCollects({ count, skip, where }));
  return collects;
};
