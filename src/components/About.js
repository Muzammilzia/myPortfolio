import {FiDownload} from 'react-icons/fi';

export const About = () => {
    return(
        <div className="About" id = "About">
            <h1 style = {{textAlign: "center"}}>About</h1>
            <div className="Aboutmain">
                <div className="Aboutcontainer">
                    <div style={{backgroundColor: "#ececec", display:"inline", margin: "auto", width: "77px"}}>About Me</div>
                    <h1>Inventive Software Engineer From Karachi, Pakistan</h1>
                    <p>A Software Developer with high aims and polished coding skills.
                        <br/>
                        I have expertise in front-end development with React and have some experience in Express | Node | MongoDB backend development. Have worked on different freelance projects as well as University projects. Also, have experience in JavaScript development, and can work with different JS libraries. 
                        Learning NextJS next!
                        <br/>
                        Also, have some knowledge of python, C# and Kotlin
                        <br/>
                        Halfway through my BS in Computer Science from UBIT, Karachi University. Two years till graduation!</p>
                    <a href="https://drive.google.com/uc?id=1buVBuPUZHssffn-GRFPlm2jmWXK-4AnK&export=download">
                        <button>{<FiDownload style={{width: "20px"}}/>}Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}