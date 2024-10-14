/**
 * @description This is the entry point of the application.
 * @author Yuting Xie
 * @date Oct 14, 2024
 */

import React from "react"; // Import the React library, this is necessary as the JSX syntax is transpiled to React.createElement calls
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    throw new Error("Root element not found");
}
