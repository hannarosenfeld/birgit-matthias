import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"


export default function Layout({ children }) {
    return (
        <div
          id="layout"
          style={{
              margin: `0 auto`,
              maxWidth: `75vw`,
              padding: `0 1rem`,
              flexDirection: `column`,
          }}>
          <NavBar/>
          <main style={{
              width: "auto",
              flexGrow: "1",
              minHeight: "83vh",
              display: "flex",
              flexDirection: "column"
          }}>
            {children}
          </main>
          <Footer/>
        </div>
    )
}
