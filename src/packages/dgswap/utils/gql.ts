const endpoint = 'https://thegraph.com/explorer/api/playground/QmPxcJiVTvEJST2tEeeGUWTfcHZFus9o7MZQyUxTJyFfzs'
export type populatedGqlParams = [string, object]
export type gqlParams = {
    count: number;
    skip: number;
    where?: object
}
export const queryGql = async (query: populatedGqlParams[0], variables: populatedGqlParams[1]) => {
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    })
    const { data, errors = [] } = await res.json()

    if (errors.length > 0) {
        throw new Error(JSON.stringify(errors))
    }
    return data
}
