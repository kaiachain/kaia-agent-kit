import { queryGql } from "../utils/gql";

const getQueryPancakeDayDatas = ({
  count,
  skip,
  where,
}: {
  count: number;
  skip: number;
  where?: object;
}): [string, object] => [
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
