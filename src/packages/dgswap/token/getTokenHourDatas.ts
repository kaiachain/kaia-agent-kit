import { queryGql, queryGqlInput, queryGqlVariable } from "../utils/gql";

const getQueryTokenHourDatas = ({
    count,
    skip,
    where,
}: queryGqlInput): queryGqlVariable => [
        `
  query MyQuery($count: Int!, $skip: Int!, $where: TokenHourData_filter = {}) {
    tokenHourDatas(
      first: $count,
      skip: $skip,
      orderBy: id,
      orderDirection: asc,
      where: $where
    ) {
      close
      feesUSD
      high
      id
      low
      open
      periodStartUnix
      priceUSD
      protocolFeesUSD
      totalValueLocked
      totalValueLockedUSD
      untrackedVolumeUSD
      volume
      volumeUSD
      token {
        id
      }
    }
  }
  `,
        { count, skip, where },
    ];

export const getTokenHourDatas = async (
    count: number,
    skip: number,
    where: object = {}
) => {
    const { tokenHourDatas = [] } = await queryGql(
        ...getQueryTokenHourDatas({ count, skip, where })
    );
    return tokenHourDatas;
};
