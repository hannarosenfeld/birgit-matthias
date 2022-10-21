import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const galerieContainer = {
    width: "100%",
    marginBottom: "3em"
}

const galerieList = {
    listStyle: "none",
    marginLeft: "-1em"
}


export default function Galerie() {

    return(
          <div style={galerieContainer}>
            <ul id="galerie-list" style={galerieList}>
              <li>
                <StaticImage src="../images/Galerie/Atlantis.jpg" alt="Abstrakte Malerei" />
              </li>
              <li>
                <StaticImage src="../images/Galerie/Japanischer-Herbst-648x451.jpg" style={{width: "150%"}}  alt="Auftragsarbeiten" />
              </li>
              <li>
                <StaticImage src="../images/Galerie/An-der-Schaabe.jpg" style={{width: "150%"}}  alt="Gegenständlich/Landschaften" />
              </li>
              <li>
                <StaticImage src="../images/Galerie/Too-much-Growing-or-The-Winner-Takes-It-All-Jan-2017.jpg" style={{width: "150%"}}  alt="Gegenständlich/Menschen" />
              </li>
              <li>
                <StaticImage src="../images/Galerie/Still-Granatäpfel-Jan.-2018-Tempera-auf-Pappe.jpg" style={{width: "150%"}}  alt="Gegenständlich/Stilleben" />
              </li>
              <li>
                <StaticImage src="../images/Galerie/x-green-Landscape-Jan-2017.jpg" style={{width: "150%"}}  alt="Halbabstrakt" />
              </li>
            </ul>
          </div>
    )
}
