import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'
import Hero from '../components/bildContainer/Hero'
import Banner from '../components/banner/Banner'
import Galerie from '../components/galerie/Galerie'
import VideoBanner from '../components/videoBanner/VideoBanner'
import UeberMich from '../components/ueberMich/UeberMich'
import Ausstellungen from '../components/ausstellungen/Ausstellungen'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="index-container">
        <Hero image={data.allContentfulBild.nodes} />
        <Banner />
        <Galerie />
        <VideoBanner />
        <UeberMich />
        <Ausstellungen />
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
