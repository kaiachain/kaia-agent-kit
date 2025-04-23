import { gqlParams, populatedGqlParams, queryGql } from "../utils/gql.js";

const getQueryTokenDayDatas = ({ count, skip, where }: gqlParams): populatedGqlParams => [
  `
  query TokenDayDatas($count: Int!, $skip: Int!, $where: TokenDayData_filter = {}) {
    tokenDayDatas(first: $count, skip: $skip, where: $where) {
      id
      date
      volumeUSD
      volume
      priceUSD
      open
      close
      high
      low
    }
  }
  `,
  { count, skip, where }
];

export const getTokenDayDatas = async (
  count: number,
  skip: number,
  where: object = {}
) => {
  const { tokenDayDatas = [] } = await queryGql(...getQueryTokenDayDatas({ count, skip, where }));
  return tokenDayDatas;
};
