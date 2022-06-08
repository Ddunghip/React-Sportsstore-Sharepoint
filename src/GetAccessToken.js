import * as React from 'react';
import { useState, useEffect } from 'react';
import { authProvider } from './authProvider';

const GetAccessTokenA = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetch() {
            await authProvider.getAccessToken().then(token => {
                console.log("access_Token", token.accessToken)
                setData(token.accessToken)

            })
        }
        fetch()

    }, [])
    return { data }
}
export default GetAccessTokenA;