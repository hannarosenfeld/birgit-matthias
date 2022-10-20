import React from 'react'

import wolf from "./wolf.jpg"

import { StaticImage } from "gatsby-plugin-image"


const bildContainer = {
    width: "100%",
    display: "flex",
    margin: "3em auto",
}
const bildStyling = {
    margin: "0 auto",

}


function BildContainer() {
    return(
        <div style={bildContainer}>
          <StaticImage src="./wolf.jpg" style={bildStyling}/>
        </div>


    )
}



export default BildContainer
