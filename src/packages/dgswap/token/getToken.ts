import { queryGql, queryGqlInput, queryGqlVariable } from "../utils/gql";


const getQueryTokens = ({
    count,
    skip,
    where,
}: queryGqlInput): queryGqlVariable => [
        `
  query MyQuery($count: Int!, $skip: Int!, $where: Token_filter = {}) {
    tokens(
      first: $count
      orderBy: id
      orderDirection: asc
      skip: $skip
      subgraphError: allow
      where: $where
    ) {
      decimals
      derivedETH
      derivedUSD
      feesUSD
      id
      name
      poolCount
      protocolFeesUSD
      symbol
      totalSupply
      totalValueLocked
      totalValueLockedUSD
      totalValueLockedUSDUntracked
      txCount
      untrackedVolumeUSD
      volume
      volumeUSD
    }
  }
  `,
        { count, skip, where },
    ];

export const getTokens = async (
    count: number,
    skip: number,
    where: object = {}
) => {
    const { tokens = [] } = await queryGql(...getQueryTokens({ count, skip, where }));
    return tokens;
};
