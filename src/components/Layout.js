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
              width: "65vw",
              margin: "2.5em auto 0 auto",
              flexGrow: "1",
              minHeight: "79.5vh"
          }}>
            {children}
          </main>
          <Footer/>
        </div>
    )
}
