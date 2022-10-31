import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"

export default function ArtWork({ pageContext }) {
    const { artwork } = pageContext
    const image = getImage(artwork.image.gatsbyImageData)
    console.log(artwork)
    return(
        <Layout>
        <div className="d-flex align-items-center">



            <div>

            </div>
          </div>
        </Layout>
    )
}
