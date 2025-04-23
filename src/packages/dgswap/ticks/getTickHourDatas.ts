import { queryGql, gqlParams, populatedGqlParams } from "../utils/gql.js";


const getQueryTickHourDatas = ({
    count,
    skip,
    where,
}: gqlParams): populatedGqlParams => [
        `
  query MyQuery($count: Int!, $skip: Int!, $where: TickHourData_filter = {}) {
    tickHourDatas(
      first: $count
      orderBy: id
      orderDirection: asc
      skip: $skip
      where: $where
    ) {
      feesUSD
      id
      liquidityGross
      liquidityNet
      periodStartUnix
      volumeToken0
      volumeToken1
      volumeUSD
      tick {
        id
      }
    }
  }
  `,
        { count, skip, where },
    ];

export const getTickHourDatas = async (
    count: number,
    skip: number,
    where: object = {}
) => {
    const { tickHourDatas = [] } = await queryGql(
        ...getQueryTickHourDatas({ count, skip, where })
    );
    return tickHourDatas;
};
