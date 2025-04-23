import { queryGql, queryGqlInput, queryGqlVariable } from "../utils/gql";


const getQueryTickHourDatas = ({
    count,
    skip,
    where,
}: queryGqlInput): queryGqlVariable => [
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
