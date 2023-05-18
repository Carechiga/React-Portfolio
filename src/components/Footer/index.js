import React from "react";

//target="_blank"/rel="noopener noreferrer" is used to open link in a separate tab
function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="https://github.com/carechiga" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/icons/github-icon.png")} alt="github" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/christopher-arechiga-2b027473/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/icons/linkedin-icon.webp")} alt="Linkedin" className="logo"></img>
                </a>
            </div>
            <div>   
                <a href="https://www.youtube.com/channel/UC52_oOkPU_eeSwkBXDnZizw/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/icons/youtube-icon.avif")} alt="youtube" className="logo"></img>
                </a>
            </div>
            <div>   
                <a href="https://open.spotify.com/artist/4EFPnmy04sQLIFhHKKw6rE" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/icons/Spotify_icon.svg.png")} alt="spotifcy" className="logo"></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;