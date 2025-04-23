import { queryGql } from "../utils/gql";

const getQueryMintsTransactions = ({ count, skip, where }: { count: number; skip: number; where?: object }): [string, object] => [
  `
  query getMintsTx($count: Int!, $skip: Int!, $where: Mint_filter = {}) {
    mints(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
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
      amountUSD
      id
      logIndex
      origin
      sender
      timestamp
    }
  }
  `,
  { count, skip, where }
];

export const getMintsTransactions = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { mints = [] } = await queryGql(...getQueryMintsTransactions({ count, skip, where }));
  return mints;
};
