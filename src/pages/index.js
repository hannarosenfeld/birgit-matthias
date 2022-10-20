import * as React from "react"
import { BgImage } from 'gbimage-bridge';
import { converToBgImage } from "gbimage-bridge"

import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import BildContainer from "../components/BildContainer"

import wolf from "../images/wolf.jpg"


const IndexPage = () => {
    return (
        <Layout>
          <main style={{display: "flex"}}>
            <BildContainer/>
          </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>BIRGIT MATTHIAS</title>
