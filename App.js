import React from 'react';
import ReactDOM from 'react-dom/client';

let element = React.createElement("h1", {}, "this is india");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);