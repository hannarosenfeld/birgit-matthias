import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import BildContainer from "../components/BildContainer"
import Galerie from "../components/Galerie"

const IndexPage = ({ data }) => {
    return (
        <Layout>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <BildContainer image={data.allContentfulBild.nodes}/>
            <Galerie/>
          </div>
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
