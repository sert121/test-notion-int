import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';


function HomePage() {
    // let REACT_APP_NOTION_AUTH_URL= "https://api.notion.com/v1/oauth/authorize?client_id=058b35d0-184c-40ee-9d72-0e38e8a26632&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000"
    let REACT_APP_NOTION_AUTH_URL = process.env.REACT_APP_NOTION_AUTH_URL;
    let [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(() => {

        const code = searchParams.get("code")
        console.log('code',code);

    }, [searchParams]);
  

    function handleButtonClick(e) {
        e.preventDefault();
    }

  return (
    <div>
      <h1>Welcome to my homepage!</h1>
      <a href={REACT_APP_NOTION_AUTH_URL}>
            Click me!
      </a>
      <br></br>
      <Link
        to={{
            pathname: "/notion",
            }}
        >
            View notion page
        </Link>
    </div>
  );
}

export default HomePage;