import * as React from "react"
import { graphql } from 'gatsby'

import NavBar from "../components/NavBar"
import Layout from "../components/Layout"
import BildContainer from "../components/BildContainer"


const IndexPage = ({ data }) => {
    return (
        <Layout>
          <main style={{display: "flex"}}>
            <BildContainer image={data.allContentfulBild.nodes}/>
          </main>
        </Layout>
    )
}

export const query = graphql`
  query HomePageQuery {
    allContentfulBild {
      nodes {
        titel
        id
        image {
          gatsbyImageData(width: 1200, placeholder: BLURRED)
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>BIRGIT MATTHIAS</title>
