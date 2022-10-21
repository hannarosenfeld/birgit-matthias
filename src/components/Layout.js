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
              padding: `0 1rem`
          }}>
          <NavBar/>
          <div
            className="main"
            style={{
                margin: "2em auto 0 auto"
            }}
          >
            {children}
          </div>
          <Footer/>
        </div>
    )
}
