import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'



export default function GalerieTemplate({ pageContext }) {
    const { category } = pageContext
    return(
        <Layout>
          <div>
            <h4 style={{borderBottom: "1px solid black", paddingBottom: "2px", maxWidth: "fit-content"}}>{category.title.title}</h4>
            <br/>
            <div className="d-flex flex-wrap" style={{gap: "1em"}}>
            {category.werke.map(werk =>{
                console.log(werk)
                const image = getImage(werk.gatsbyImageData)
                return(
                      <GatsbyImage image={image}/>
                )
            })}
        </div>
        </div>
        </Layout>
    )
}
