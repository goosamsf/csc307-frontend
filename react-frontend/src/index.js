import React from 'react'
import MyApp from './MyApp'
import "./index.css";
import ReactDOMClient from 'react-dom/client'



const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />);


