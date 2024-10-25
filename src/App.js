import React from 'react';
import ReactDOM from 'react-dom/client';

import Wrapper from './components/Wrapper';




const Component = () =>{
    return (
        <Wrapper/>
   );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component/>);


// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14860&lng=85.89730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING