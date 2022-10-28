import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BgImage } from "gbimage-bridge"

const galerieStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    zIndex: "0"
}
const bildbox = {
    marginBottom: "2em",
    height: "20vw",
    width: "20vw",
    overflow: "hidden",
    position: "relative",
    textAlign: "center"
}

function Bild(props) {
    const [isHover, setIsHover] = useState(false)

    const image = props.image
    const title = props.title.title
    const slug = props.slug

    const centeredText = {
        fontSize: "2.4vw",
        color: "#E42B9E",
        textShadow: "1px 1px #000123",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9",
        display: isHover ? "inherit" : "none",
    }
    const imageStyle = {
        width: "150%",
        filter: isHover ? "brightness(180%) contrast(50%)" : "none",
    }
    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    const link = `/galerie/${slug}`

    return(
        <div
          style={bildbox}
          className="galerie-list-box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={link}>
          <GatsbyImage
            image={image}
            style={imageStyle}
          />
        <div style={centeredText}>{title}</div>
        </Link>
        </div>
    )
}



export default function Galerie() {
    return(
        <StaticQuery
          query={graphql`
          query GalerieQuery {
            allContentfulGalerieMenu {
              nodes {
                bilder {
                    title {
                      title
                    }
                    slug
                    image{
                      gatsbyImageData(width: 620)
                  }
                }
              }
            }
          }
       `}
          render={data => {
              const rubriken = data.allContentfulGalerieMenu
              return(
                  <div style={{ width: "100%", heigth: "45vw"}}>
                    {rubriken.nodes.map(rubrik => {
                        return(
                            <div style={galerieStyle} id="galerie-list">
                              {rubrik.bilder.map(bild => {
                                  console.log(bild.slug)
                                  const image = getImage(bild.image.gatsbyImageData)

                                  return(
                                      <Bild image={image} title={bild.title} slug={bild.slug}/>
                                  )
                              }
                                                )}</div>
                        )

                    })}
                  </div>
              )
          }}
        />
    )
}
