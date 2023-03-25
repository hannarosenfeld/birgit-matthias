import React from "react"
import NavBar from "../navbar/NavBar"
import Footer from "../footer/Footer"

import { layoutContainer } from "./layout.module.css"

export default function Layout({ children }) {
    return (
        <div
          className={layoutContainer}        >
          <header
          >
            <NavBar/>
          </header>
          <main >
            {children}
          </main>
          <footer >
            <Footer />
          </footer>

        </div>
    )
}
