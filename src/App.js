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


