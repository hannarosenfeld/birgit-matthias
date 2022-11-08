import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Ausstellungen() {
    return(
        <StaticQuery
          query={graphql`
          query AustellungQuery {
            allContentfulAusstellung {
              nodes {
                zeitraum
                lokation
              }
            }
          }
       `}
          render={data => {
              const austellungen = data.allContentfulAusstellung.nodes
              return(
                  <div
                    id="ausstellungen"
                    style={{
                      width: "156.8%",
                      margin: "0 0 0 -28.4%",
                      background: "#FDA1C9"
                  }}>
                    <br/>

                    <div
                      style={{
                          display: "grid",
                          gridTemplateColumns: "1.2fr 2.5fr 3fr",
                          gridTemplateRows: "0.5fr 0.5fr",
                      }}
                    >

                      <div
                        id="ausstellungen-content"
                        style={{
                            gridColumn: "2/3",
                        }}
                      >
                      <h4
                      style={{
                          paddingBottom: "2px",
                          maxWidth: "fit-content"
                      }}>Ausstellungen</h4>
                        <br/>
                        <div style={{width: "80%", height: "100%",border: "2px solid blue"}}></div>
                      </div>
                      <div
                        className="ausstellungen-textbox"
                        style={{
                            margin: "6em 3em 0 -2em"
                        }}>
                        <p>Einzelausstellungen</p>
                        {austellungen.map(austellung => (
                              <div className="d-flex flex-wrap mb-2" id="einzelausstellungen">
                                <span style={{marginRight: "1.5em"}}>{austellung.zeitraum}</span>
                                <span>{austellung.lokation}</span>
                              </div>
                        ))}
                        <br/>
                        <br/>
                        <p>Ausstellungsbeteiligungen</p>
                        <p>Mal- und Zeichenschule Weimar: In den Werkschauen, Ausleihungen an fördernde
                          Unternehmen wie Grafe, Blankenhain und Bayer AG, Weimar, Thüringer Landtag,
                          Gruppenausstellungen mit dem Malkurs Roger Bonnard im Erbenhof, Weimar und
                          Seebachstift, Weimar</p>
                      </div>
                    </div>

                  </div>
              )
          }}
        />
    )

}
