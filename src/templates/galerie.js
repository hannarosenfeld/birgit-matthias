import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'



export default function GalerieTemplate({ pageContext }) {
    const { category } = pageContext
    return(
        <Layout>
        <div>{category.title.title}</div>
        </Layout>
    )
}
