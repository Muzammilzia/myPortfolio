import React from 'react';
import {ProjectsBox} from './ProjectsBox';
import { ProjectsData } from './data';

export const Projects = () => {
    const projectsList = ProjectsData.map( element => {
        return(
            <ProjectsBox
                id = {element.id}
                head = {element.head}
                description = {element.description}
                src = {element.src}
            />
        )
    })

    return (
        <div className='projectscontainer' id = "Projects">
            <h6 style={{textAlign: "center", paddingTop: "10px"}}><span style={{backgroundColor: "#ececec", padding: "10px"}}>My Projects</span></h6>
            <h1 style={{textAlign: "center"}}>Projects</h1>
            <div className='innerprojectscontainer'>
                {projectsList}
            </div>
        </div>
    );
};