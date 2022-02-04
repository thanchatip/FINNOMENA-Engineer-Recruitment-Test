const getFundsByRange = async (period) => {
    const queryParam = `?period=${period}`
    const url = `http://localhost:3000/get-funds-by-range${queryParam}`
    try {
        const response = await fetch(url ,{
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers' : '*'
        }
    })
    const result = await response.json()
    const funds = result.data
    return funds
    } catch (err) {
        console.log(err)
    }
}

export default  {
    getFundsByRange
}