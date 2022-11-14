import React, { useState }  from 'react'
import {Modal} from 'react-bootstrap'

import v from "../images/IN THE STUDIO WITH CLAIRE TABOURET.mp4"

export default function VideoBanner(){
    const [isShown, setIsShown] = useState(false);
    function handleClick(e) {
        var video = document.querySelector("video")

        if(isShown === true) {
                     video.setAttribute("muted", "false")
            video.muted = !video.muted;
            document.getElementById("video-modal").style.display = "none"

        } else {
            console.log("hi")
        }
    }
    return(
        <div
          className="video-banner"
          style={{
              width: "100%",
              position: "relative",
              zIndex: "0",
              display: "flex",
          }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && document.querySelector("video").muted === true && (
              <div
                id="video-modal"
                style={{
                    fontSize: "1.8em",
                    margin: "0",
                    top: "50%",
                    left: "50%",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    padding: "1.8em",
                    zIndex: "10",
                    position: "absolute",
                    display: "block",
                    color: "#f9f9f9",
                    background: "rgba(33,33,33, 0.8)",
                    borderRadius: "0.23em"
                }}
                onClick={handleClick}
              >
                Ton einschalten mit Klick
              </div>
          )}
          <video autoPlay muted id="homepage-video" className="video-section" style={{width: "100%"}} controls>
            <source src={v} type="video/mp4" />
          </video>
        </div>
    )
}
