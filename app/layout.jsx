import "../styles/globals.css"

import { Navigation } from "../components/Navigation";



export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head> 
            <title>My first app</title>
        </head>
        <body>
         <Navigation/> 
            {children}
        </body>
      </html>
    );
  }