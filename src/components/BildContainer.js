import React from 'react'
import { BgImage } from 'gbimage-bridge'
import { converToBgImage } from "gbimage-bridge"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'


const bildContainer = {
    width: "100%",
    display: "flex",
    margin: "0 auto",
    alignItems: "center"
}
const bildStyling = {
    margin: "0 auto",
    maxHeight: "100%",
    objectFit: "contain",
    height: "80vh",
    width: "85%",
}


function BildContainer(props) {
    const image = props.image
    return(
        <div id="bild-container" style={bildContainer}>
          {image.map(img => {
              const image = getImage(img.image)
              return(
                  <div key={img.id} style={{width: "100%", margin: "0 auto"}}>
                    <BgImage
                      id="bild"
                      className="mb-5 d-flex align-items-end"
                      image={image}
                      style={bildStyling}
                    />
                  </div>
              )
          })}
        </div>
    )}


export default BildContainer
