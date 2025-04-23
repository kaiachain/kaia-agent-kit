import { gqlParams, populatedGqlParams, queryGql } from "../utils/gql.js";

const getQueryPancakeDayDatas = ({
  count,
  skip,
  where,
}: gqlParams): populatedGqlParams => [
    `
  query MyQuery($count: Int!, $skip: Int!, $where: PancakeDayData_filter = {}) {
    pancakeDayDatas(
      first: $count,
      skip: $skip,
      orderBy: id,
      orderDirection: asc,
      where: $where
    ) {
      date
      feesUSD
      id
      protocolFeesUSD
      tvlUSD
      txCount
      volumeETH
      volumeUSD
      volumeUSDUntracked
    }
  }
  `,
    { count, skip, where },
  ];

export const getPancakeDayDatas = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { pancakeDayDatas = [] } = await queryGql(
    ...getQueryPancakeDayDatas({ count, skip, where })
  );
  return pancakeDayDatas;
};
