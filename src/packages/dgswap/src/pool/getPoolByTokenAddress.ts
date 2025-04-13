import { queryGql } from "../../utils/gql.js";

const GET_POOLS = `
  query GetPools($token0Address: String!, $token1Address: String!) {
    pools(
      first: 1
      where: {
        or: [
          { token0_: { id: $token0Address }, token1_: { id: $token1Address } }
          { token0_: { id: $token1Address }, token1_: { id: $token0Address } }
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

export const getPoolByTokenAddress = async (
  token0Address: `0x${string}`,
  token1Address: `0x${string}`
) => {
  // Validate input addresses if needed
  const { pools = [] } = await queryGql(GET_POOLS, {
    token0Address,
    token1Address,
  });
  if (pools.length === 0) {
    throw new Error("No pool found");
  }
  return pools[0];
};
