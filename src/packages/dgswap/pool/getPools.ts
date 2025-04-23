import { queryGql, queryGqlInput, queryGqlVariable } from "../utils/gql";

const getQueryPools = ({ count, skip, where }: queryGqlInput): queryGqlVariable => [
  `
  query GetPools($count: Int!, $skip: Int!, $where: Pool_filter = {}) {
    pools(first: $count, skip: $skip, where: $where) {
      id
      createdAtTimestamp
      token0Price
      token1Price
      token0 {
        derivedUSD
        id
        name
        symbol
        decimals
      }
      token1 {
        id
        derivedUSD
        name
        symbol
        decimals
      }
    }
  }
  `,
  { count, skip, where }
];

export const getPools = async (params: queryGqlInput) => {
  const { pools = [] } = await queryGql(...getQueryPools(params));
  return pools;
};
