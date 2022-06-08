import * as React from 'react';
import { useState } from 'react';
import { RestDataSource } from './data/RestDataSource';




const GetTokenButton = ({ provider }) => {
  const [dataspo, setDataspo] = useState([]);
  const [acToken, setacToken] = useState([]);


  const siteId = 'modernofficetech.sharepoint.com,1da6c0dd-1a36-4a65-9620-e7c44cffa4c2,bdc2a6f7-94b2-4fc2-8d6e-4fcb7656a517';
  const listId = 'b5b7a913-41bb-4c24-bc7e-7af15a7f4c8b';



  function getAuthToken() {
    provider.getAccessToken().then(token => {
      console.log("access_Token", token.accessToken);
      setacToken(token.accessToken)

    }

    )

  };


  return (
    // dataspo
    <>

      <button onClick={getAuthToken} className="Button" >
        Get Access Token And Data sharepoint
      </button>
    </>
  );
}
export default GetTokenButton;