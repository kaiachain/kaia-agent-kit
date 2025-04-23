import { gqlParams, populatedGqlParams, queryGql } from "../utils/gql.js";

const getQueryTransactions = ({ count, skip, where }: gqlParams): populatedGqlParams => [
  `
  query getTransactions($count: Int!, $skip: Int!, $where: Transaction_filter = {}) {
    transactions(first: $count, skip: $skip, orderBy: id, orderDirection: asc, where: $where) {
      blockNumber
      gasPrice
      gasUsed
      id
      timestamp
      mints {
        amount
        amount0
        amount1
        amountUSD
        id
        logIndex
        origin
        owner
        pool {
          collectedFeesToken0
          collectedFeesToken1
          collectedFeesUSD
          createdAtBlockNumber
          createdAtTimestamp
          feeGrowthGlobal0X128
          feeGrowthGlobal1X128
          feeProtocol
          feeTier
          feesUSD
          id
          liquidity
          liquidityProviderCount
          tick
          token0 {
            id
            name
            decimals
            derivedETH
            derivedUSD
            symbol
          }
          token1 {
            id
            name
            decimals
            derivedETH
            derivedUSD
            symbol
          }
        }
        sender
      }
    }
  }
  `,
  { count, skip, where }
];

export const getTransactions = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { transactions = [] } = await queryGql(...getQueryTransactions({ count, skip, where }));
  return transactions;
};
