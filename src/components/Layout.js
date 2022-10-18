import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"


export default function Layout({ children }) {
    return (
        <div
          style={{
              margin: `0 auto`,
              maxWidth: 650,
              padding: `0 1rem`
          }}>
          <NavBar/>
          {children}
          <Footer/>
        </div>
    )
}
