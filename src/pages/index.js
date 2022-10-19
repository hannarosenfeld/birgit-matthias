import * as React from "react"

import NavBar from "../components/NavBar"
import Layout from "../components/Layout"

import wolf from "../images/wolf.jpg"


const IndexPage = () => {
    return (
        <Layout>
          <main style={{display: "flex"}}>
            <img src={wolf} style={{width: "55vw", margin: "3em auto"}}/>
          </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>BIRGIT MATTHIAS</title>
