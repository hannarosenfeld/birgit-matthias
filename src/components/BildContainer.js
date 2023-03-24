import React from 'react'
import { BgImage } from 'gbimage-bridge'
import { getImage } from 'gatsby-plugin-image'


const bildContainer = {
    width: "65vw",
    display: "flex",
    margin: "0 auto",
    height: "90vh",
    alignItems: "center"
}
const bildStyling = {
    margin: "0 auto",
    objectFit: "contain",
    height: "75vh",
    width: "100%",
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
                      className="d-flex align-items-end"
                      image={image}
                      style={bildStyling}
                    />
                  </div>
              )
          })}
        </div>
    )}


export default BildContainer
