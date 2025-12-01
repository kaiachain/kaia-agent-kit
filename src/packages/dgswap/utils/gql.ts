/** @format */

import { API_DEFAULTS } from "../../../utils/constants";
export type populatedGqlParams = [string, object];
export type gqlParams = {
  count: number;
  skip: number;
  where?: object;
};
export const queryGql = async (
  query: populatedGqlParams[0],
  variables: populatedGqlParams[1],
  network?: string
) => {
  const endpoint = API_DEFAULTS.DGSWAP_SUBGRAPH_URL[network || "kairos"];
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const { data, errors = [] } = await res.json();

  if (errors.length > 0) {
    throw new Error(JSON.stringify(errors));
  }
  return data;
};
