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
          <div
            className="main"
            style={{
                margin: "2.5em auto 0 auto",
                display: "flex",

            }}
          >
            {children}
          </div>
          <Footer/>
        </div>
    )
}
