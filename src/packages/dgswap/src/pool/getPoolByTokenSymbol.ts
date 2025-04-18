import { queryGql } from "../../utils/gql.js";

const GET_POOLS = `
  query GetPools($symbol0: String!, $symbol1: String!) {
    pools(
      first: 1
      where: {
        or: [
          { token0_: { symbol: $symbol0 }, token1_: { symbol: $symbol1 } }
          { token0_: { symbol: $symbol1 }, token1_: { symbol: $symbol0 } }
        ]
      }
    ) {
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
`;

export const getPoolByTokenSymbol = async (
  parameters: any
) => {
  const { symbol0, symbol1 } = parameters;
  const { pools = [] } = await queryGql(GET_POOLS, { symbol0, symbol1 });
  if (pools.length === 0) {
    throw new Error("No pool found");
  }
  return pools[0];
};
