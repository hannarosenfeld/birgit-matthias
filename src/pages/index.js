import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import BildContainer from "../components/BildContainer"
import Galerie from "../components/Galerie"
import Banner from "../components/Banner"
import UeberMich from "../components/UeberMich"
import Ausstellungen from "../components/Ausstellungen"
import VideoBanner from "../components/VideoBanner"


const IndexPage = ({ data }) => {
    return (
        <Layout>
          <div
            id ="index-container"
            style={{
                width: "88%",
                margin: "1em auto 0 auto"
            }}>
            <BildContainer image={data.allContentfulBild.nodes}/>
            <Banner/>
            <br/>
            <br/>
            <br/>
            <Galerie/>
            <VideoBanner/>
            <UeberMich/>
            <Ausstellungen/>
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
