const endpoint = 'https://thegraph.com/explorer/api/playground/QmPxcJiVTvEJST2tEeeGUWTfcHZFus9o7MZQyUxTJyFfzs'
export type queryGqlVariable = [string, object]
export type queryGqlInput = {
    count: number;
    skip: number;
    where?: object
}
export const queryGql = async (query: queryGqlVariable[0], variables: queryGqlVariable[1]) => {
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
