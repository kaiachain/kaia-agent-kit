const endpoint =
  "https://thegraph.com/explorer/api/playground/QmPxcJiVTvEJST2tEeeGUWTfcHZFus9o7MZQyUxTJyFfzs";

export const queryGql = async (query: string, variables: any) => {
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
  const { data, error } = await res.json();
  if (error) {
    console.log(error);
    throw new Error("Unable to fetch data");
  }
  return data;
};
