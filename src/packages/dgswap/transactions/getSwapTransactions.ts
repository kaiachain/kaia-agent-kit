import { queryGql } from "../utils/gql";

const getQuerySwapsTransactions = ({ count, skip, where }: { count: number; skip: number; where?: object }): [string, object] => [
  `
  query getSwapsTx($count: Int!, $skip: Int!, $where: Swap_filter = {}) {
    swaps(first: $count, skip: $skip, where: $where) {
      pool {
        id
        token0 {
          decimals
          id
          symbol
          derivedUSD
          derivedETH
          totalSupply
          txCount
          volume
          volumeUSD
        }
        token0Price
        token1Price
        token1 {
          decimals
          id
          symbol
          derivedUSD
          derivedETH
          totalSupply
          txCount
          volume
          volumeUSD
        }
      }
      amount0
      amount1
      amountFeeUSD
      amountUSD
      id
      logIndex
      origin
      recipient
      sender
      sqrtPriceX96
      tick
      timestamp
    }
  }
  `,
  { count, skip, where }
];

export const getSwapsTransactions = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { swaps = [] } = await queryGql(...getQuerySwapsTransactions({ count, skip, where }));
  return swaps;
};
