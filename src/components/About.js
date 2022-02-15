import {FiDownload} from 'react-icons/fi';

export const About = () => {
    return(
        <div className="About" id = "About">
            <h1 style = {{textAlign: "center"}}>About</h1>
            <div className="Aboutmain">
                <div className="Aboutcontainer">
                    <div style={{backgroundColor: "#ececec", display:"inline", margin: "auto", width: "77px"}}>About Me</div>
                    <h1>Inventive Software Engineer From Karachi, Pakistan</h1>
                    <p>Student of Computer Science who Loves to Code, currently in second year of BSCS
                    , working in the tech of Web and Blockchain and learning new things each day!</p>
                    <a href="https://drive.google.com/uc?id=1Z8JhLRCe1BjN4XxclUBwWp_uj7aW5pHV&export=download">
                        <button>{<FiDownload style={{width: "20px"}}/>}Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}