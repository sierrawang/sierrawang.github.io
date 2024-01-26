import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Face } from "./Face";

export const Header = ({setIsDungeon}) => {
    const headerStyle = { marginBottom: "2px", marginTop: "2px" };
    const [isVisible, setIsVisible] = useState(true); // Tracks visibility

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    const containerStyle = { display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }

    // Updated styles for fading effect
    const textStyle = {
        transition: "opacity 0.5s ease",
        opacity: isVisible ? 1 : 0,
    };

    const imageStyle = {
        transition: "opacity 0.5s ease",
        opacity: !isVisible ? 1 : 0,
        position: 'absolute',
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
            <Face toggleIsVisible={toggleVisibility} />
            <div style={containerStyle}>
                <div style={textStyle}>
                    <h1 style={{ marginBottom: "5px" }}>Sierra Wang</h1>
                    <h2 style={headerStyle}>PhD Student at Stanford University</h2>
                    <h3 style={headerStyle}>sierraw /at/ stanford.edu</h3>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/sierrawang" aria-label="Github Link" >
                            <FaGithub style={{ marginRight: "5px", fontSize: "xx-large", color: "green" }} />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sierra-wang/" aria-label="LinkedIn Link">
                            <FaLinkedin style={{ marginRight: "5px", fontSize: "xx-large", color: "blue" }} />
                        </a>
                    </div>
                </div>
                <div style={imageStyle} onClick={setIsDungeon}>
                    <img src='trapdoor.jpg' alt="Trapdoor" style={{width: '100px'}}/>
                </div>
            </div>
        </div>
    );
};


// import { Face } from "./Face"
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"


// export const Header = () => {
//     const headerStyle = {marginBottom: "2px", marginTop: "2px"}

//     return (
//         <div style={{display: "flex", flexWrap: "wrap"}}>
//             <Face />
//             <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"}}>
//                 <h1 style={{marginBottom: "5px"}}>Sierra Wang</h1>
//                 <h2 style={headerStyle}>Ph.D Student at Stanford University</h2>
//                 <h3 style={headerStyle}>sierraw /at/ stanford.edu</h3>
//                 <div style={{display: "flex", flexDirection: "row"}}>
//                     <a target="_blank" rel="noreferrer" href="https://github.com/sierrawang" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "green"}}/></a>
//                     <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sierra-wang/" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "blue"}}/></a>                </div>
//             </div>
//         </div>
//     )

// }
