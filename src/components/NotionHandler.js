import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import { Buffer } from 'buffer';


export default function NotionHandler() {
    
  let [searchParams, setSearchParams] = useSearchParams()
  const code = searchParams.get("code")

    console.log(code);
    // initialize react state
    const [accessToken, setAccessToken] = React.useState('');
    const [config, setConfig] = React.useState({});
    

    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const redirectUri = 'http://localhost:3000'

     useEffect(() => {
      if (code) {
        console.log("Code parameter found")
        localStorage.setItem("code", code)
        // Send the code to the server to exchange it for an access token
        const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

      fetch("https://api.notion.com/v1/oauth/token", {
          method: "POST",
          headers: {
          Accept: "application/json", 
          "Content-Type": "application/json",
          Authorization: `Basic ${encoded}`,
      },
    body: JSON.stringify({
        grant_type: "authorization_code",
        code: code,
    }),
}).then((response) => {response.json();
    console.log("hey this is the response!")            
    console.log(response.json());
    setAccessToken(response.json().access_token);
    setConfig(response.json())
  })
        // ...
      } else {
        // Handle the case where there is no code parameter
        console.log("No code parameter found")
      }
    }, [code]);
  
    return <div>
      
      Authenticating...
      
      </div>;
}

