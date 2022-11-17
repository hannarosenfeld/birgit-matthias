import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"


export default function Layout({ children }) {
    return (
        <div
          id="layout"
          style={{
              margin: `0 auto`,
              padding: `0 1rem`,
              flexDirection: `column`,
          }}>
          <header
            style={{
                margin: `0 auto`,
                width: `75vw`,
                padding: `0 1rem`,
            }}
          >
            <NavBar/>
          </header>
          <main style={{
              flexGrow: "1",
              minHeight: "77vh",
              display: "flex",
              flexDirection: "column"
          }}>
            {children}
          </main>
          <footer
            style={{
                margin: `0 auto`,
                width: `75vw`,
                padding: `0 1rem`,
            }}
          >
            <Footer />
          </footer>

        </div>
    )
}
